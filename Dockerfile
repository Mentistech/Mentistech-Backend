# ─────────────────────────────────────────────────────────
# Stage 1 — Instalar TODAS as dependências (dev + prod)
# ─────────────────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --frozen-lockfile

# ─────────────────────────────────────────────────────────
# Stage 2 — Build TypeScript + Prisma Client
# ─────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# prisma generate não precisa de banco, apenas do schema
RUN DATABASE_URL=postgresql://x:x@localhost/x npx prisma generate
RUN npm run build

# ─────────────────────────────────────────────────────────
# Stage 3 — Apenas dependências de produção
# ─────────────────────────────────────────────────────────
FROM node:22-alpine AS prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --frozen-lockfile --omit=dev && npm cache clean --force

# ─────────────────────────────────────────────────────────
# Stage 4 — Imagem final mínima
# ─────────────────────────────────────────────────────────
FROM node:22-alpine AS production

ENV NODE_ENV=production

# Usuário não-root
RUN addgroup -S mentis && adduser -S mentis -G mentis

WORKDIR /app

# Dependências de produção
COPY --from=prod-deps /app/node_modules ./node_modules

# Prisma Client gerado (necessário em runtime)
# @prisma/ = pacotes Prisma | .prisma/ = client gerado por prisma generate
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Código compilado pelo nest build (vai para dist/)
COPY --from=builder /app/dist ./dist

# Schema Prisma (para migrate deploy em runtime)
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY package*.json ./

RUN chown -R mentis:mentis /app
USER mentis

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "dist/src/main"]
