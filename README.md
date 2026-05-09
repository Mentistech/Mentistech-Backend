# MentisTech — Backend

Plataforma de suporte psicológico corporativo com análise de IA e agendamento de consultas com psicólogos.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Stack](#stack)
- [Arquitetura](#arquitetura)
- [Modelo de Dados](#modelo-de-dados)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Executando o Projeto](#executando-o-projeto)
- [Autenticação](#autenticação)
- [Endpoints da API](#endpoints-da-api)
  - [Auth](#auth)
  - [Check-in Emocional](#check-in-emocional)
  - [Psicólogos](#psicólogos)
  - [Consultas](#consultas)
- [Formato de Erro](#formato-de-erro)
- [Testes](#testes)
- [CI/CD](#cicd)
- [Estrutura de Pastas](#estrutura-de-pastas)

---

## Visão Geral

O MentisTech é uma API REST para apoio à saúde mental no ambiente corporativo. Colaboradores realizam check-ins emocionais diários que são analisados automaticamente pela IA da Anthropic (Claude), gerando respostas de acolhimento e análises técnicas para os psicólogos. O sistema também gerencia a disponibilidade de psicólogos e o agendamento de consultas.

**Fluxo principal:**

```
Colaborador faz check-in
        ↓
Claude analisa humor + nível de estresse
        ↓
Colaborador recebe mensagem de suporte
Psicólogo recebe análise técnica completa
        ↓
Colaborador agenda consulta com psicólogo disponível
        ↓
Psicólogo confirma / realiza / cancela
```

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Node.js | 22.x | Runtime |
| TypeScript | ^5.7 | Linguagem |
| NestJS | ^11.0 | Framework web |
| Prisma | ^7.8 | ORM |
| PostgreSQL | 15+ | Banco de dados |
| `@prisma/adapter-pg` | ^7.8 | Driver de conexão |
| `@nestjs/jwt` + `passport-jwt` | — | Autenticação JWT |
| bcrypt | ^6.0 | Hash de senhas |
| class-validator | ^0.15 | Validação de DTOs |
| Jest | ^30 | Testes unitários |

---

## Arquitetura

```
src/
├── auth/               # Registro, login, perfil (JWT)
├── checkin/            # Check-in emocional + integração Anthropic
├── consulta/           # Agendamento e gestão de consultas
├── psicologo/          # Listagem e disponibilidade de psicólogos
├── prisma/             # PrismaService global
└── common/
    ├── decorators/     # @Public, @Roles, @CurrentUser
    ├── guards/         # JwtAuthGuard, RolesGuard
    └── filters/        # HttpExceptionFilter
```

**Fluxo de uma requisição autenticada:**

```
Request → JwtAuthGuard → RolesGuard → Controller → Service → PrismaService → DB
```

- `JwtAuthGuard` valida o token Bearer. Rotas marcadas com `@Public()` são ignoradas.
- `RolesGuard` verifica `papel` do usuário (`COLABORADOR` | `PSICOLOGO`) contra `@Roles()`.
- `ValidationPipe` com `whitelist: true` remove campos não declarados no DTO automaticamente.
- `HttpExceptionFilter` padroniza todas as respostas de erro.

---

## Modelo de Dados

```
Usuario
  ├── PerfilColaborador  (1:1)
  │     ├── CheckinEmocional  (1:N)
  │     │     └── AnaliseIa   (1:1)
  │     └── Consulta          (1:N)  ← "ColaboradorConsultas"
  └── PerfilPsicologo    (1:1)
        ├── Disponibilidade   (1:N)
        └── Consulta          (1:N)  ← "PsicologoConsultas"
```

### Enums

| Enum | Valores |
|---|---|
| `PapelUsuario` | `COLABORADOR`, `PSICOLOGO` |
| `HumorTipo` | `MUITO_BEM`, `BEM`, `NEUTRO`, `MAL`, `MUITO_MAL` |
| `StatusConsulta` | `AGENDADA`, `CONFIRMADA`, `CANCELADA`, `REALIZADA` |
| `DiaSemana` | `SEGUNDA`, `TERCA`, `QUARTA`, `QUINTA`, `SEXTA`, `SABADO`, `DOMINGO` |

---

## Pré-requisitos

- Node.js 22+
- npm 10+
- PostgreSQL 15+ (local ou Neon, Supabase, Railway, etc.)
- Chave de API da Anthropic (para análise de IA)

---

## Instalação e Configuração

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd mentistech-backend

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# edite .env com suas credenciais

# 4. Gere o Prisma Client
npx prisma generate

# 5. Execute as migrations
npx prisma migrate dev --name init
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Conexão com o banco (PostgreSQL)
DATABASE_URL="postgresql://usuario:senha@host:5432/mentistech"

# Segredo para assinar tokens JWT (use uma string longa e aleatória em produção)
JWT_SECRET="mentistech-jwt-secret-256bits"

# Expiração do token em segundos
JWT_EXPIRATION="86400s"

# Chave da API Anthropic (Claude)
ANTHROPIC_API_KEY="sk-ant-..."

# Porta do servidor (opcional, padrão: 3000)
PORT=3000
```

> **Neon / Supabase:** adicione `?sslmode=require` ao final da `DATABASE_URL`.

---

## Executando o Projeto

```bash
# Desenvolvimento (hot reload)
npm run start:dev

# Produção
npm run build
npm run start:prod

# Verificação de tipos
npx tsc --noEmit
```

O servidor exibirá no console:
```
MentisTech Backend rodando na porta 3000
```

---

## Autenticação

A API usa **JWT Bearer Token**. Após registrar ou fazer login, inclua o token em todas as requisições protegidas:

```
Authorization: Bearer <token>
```

**Roles:**
- `COLABORADOR` — pode fazer check-in, ver seus dados e agendar consultas
- `PSICOLOGO` — pode gerenciar disponibilidade e atualizar status de consultas

Rotas marcadas como `pública` não exigem token.

---

## Endpoints da API

Base URL: `http://localhost:3000`

---

### Auth

#### `POST /auth/register` — Cadastrar usuário
**Pública**

**Body:**
```json
{
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "senha": "minimo6chars",
  "papel": "COLABORADOR",
  "departamento": "Engenharia",
  "cargo": "Desenvolvedor",
  "crp": null,
  "especialidade": null
}
```
> Para `PSICOLOGO`: omita `departamento`/`cargo` e informe `crp` e `especialidade`.

**Resposta `201`:**
```json
{
  "token": "eyJhbGci...",
  "papel": "COLABORADOR",
  "nome": "João Silva",
  "usuarioId": "uuid"
}
```

---

#### `POST /auth/login` — Autenticar
**Pública**

**Body:**
```json
{
  "email": "joao@empresa.com",
  "senha": "minimo6chars"
}
```

**Resposta `200`:** igual ao register.

**Erros:** `401` Credenciais inválidas.

---

#### `GET /auth/me` — Dados do usuário logado
**JWT requerido**

**Resposta `200`:**
```json
{
  "id": "uuid",
  "nome": "João Silva",
  "email": "joao@empresa.com",
  "papel": "COLABORADOR",
  "criadoEm": "2026-05-08T10:00:00.000Z",
  "perfilColaborador": {
    "id": "uuid",
    "departamento": "Engenharia",
    "cargo": "Desenvolvedor"
  },
  "perfilPsicologo": null
}
```

---

#### `PATCH /auth/me` — Atualizar perfil
**JWT requerido**

**Body (todos opcionais):**
```json
{
  "nome": "João da Silva",
  "departamento": "Produto",
  "cargo": "Tech Lead",
  "crp": null,
  "especialidade": null
}
```

**Resposta `200`:** objeto atualizado igual ao `GET /auth/me`.

---

### Check-in Emocional

#### `POST /checkin` — Realizar check-in
**JWT | Role: COLABORADOR**

**Body:**
```json
{
  "humor": "MAL",
  "nivelEstresse": 8
}
```
> `humor`: `MUITO_BEM` | `BEM` | `NEUTRO` | `MAL` | `MUITO_MAL`
> `nivelEstresse`: inteiro entre 1 e 10

**Resposta `201`:**
```json
{
  "id": "uuid",
  "humor": "MAL",
  "nivelEstresse": 8,
  "realizadoEm": "2026-05-08T14:30:00.000Z",
  "respostaIa": "Percebo que você está passando por um momento difícil..."
}
```
> O campo `conteudoPsicologico` (análise técnica) **nunca** é exposto ao colaborador.

**Erros:** `403` Apenas colaboradores podem realizar check-in. `500` Falha ao gerar análise de IA.

---

#### `GET /checkin/meus` — Listar meus check-ins
**JWT | Role: COLABORADOR**

**Resposta `200`:**
```json
[
  {
    "id": "uuid",
    "humor": "MAL",
    "nivelEstresse": 8,
    "realizadoEm": "2026-05-08T14:30:00.000Z",
    "analise": {
      "respostaIa": "Percebo que você está passando...",
      "geradoEm": "2026-05-08T14:30:05.000Z"
    }
  }
]
```
Ordenado do mais recente para o mais antigo.

---

#### `GET /checkin/:id` — Buscar check-in por ID
**JWT | qualquer papel**

Colaborador só acessa seus próprios check-ins. Psicólogo acessa qualquer um.

**Resposta `200`:**
```json
{
  "id": "uuid",
  "humor": "MAL",
  "nivelEstresse": 8,
  "realizadoEm": "2026-05-08T14:30:00.000Z"
}
```

**Erros:** `403` Acesso negado. `404` Check-in não encontrado.

---

#### `GET /checkin/:id/analise` — Buscar análise completa
**JWT | qualquer papel**

**Resposta para COLABORADOR `200`:**
```json
{
  "id": "uuid",
  "humor": "MAL",
  "nivelEstresse": 8,
  "realizadoEm": "...",
  "respostaIa": "Mensagem de acolhimento...",
  "geradoEm": "..."
}
```

**Resposta para PSICOLOGO `200`:**
```json
{
  "id": "uuid",
  "humor": "MAL",
  "nivelEstresse": 8,
  "realizadoEm": "...",
  "analise": {
    "id": "uuid",
    "respostaIa": "Mensagem de acolhimento...",
    "conteudoPsicologico": "Análise técnica com indicadores clínicos...",
    "geradoEm": "..."
  }
}
```

---

### Psicólogos

#### `GET /psicologos` — Listar todos os psicólogos
**Pública**

**Resposta `200`:**
```json
[
  {
    "id": "uuid",
    "crp": "06/12345",
    "especialidade": "Psicologia Clínica",
    "usuario": { "nome": "Dra. Ana", "email": "ana@clinica.com" },
    "disponibilidades": [
      {
        "id": "uuid",
        "diaSemana": "SEGUNDA",
        "horaInicio": "08:00",
        "horaFim": "12:00"
      }
    ]
  }
]
```

---

#### `GET /psicologos/:id/disponibilidade` — Disponibilidade de um psicólogo
**Pública**

**Resposta `200`:**
```json
[
  {
    "id": "uuid",
    "diaSemana": "SEGUNDA",
    "horaInicio": "08:00",
    "horaFim": "12:00"
  },
  {
    "id": "uuid",
    "diaSemana": "QUARTA",
    "horaInicio": "14:00",
    "horaFim": "18:00"
  }
]
```

---

#### `POST /psicologos/disponibilidade` — Cadastrar disponibilidade
**JWT | Role: PSICOLOGO**

**Body:**
```json
{
  "diaSemana": "SEGUNDA",
  "horaInicio": "08:00",
  "horaFim": "12:00"
}
```
> `horaInicio` e `horaFim` devem estar no formato `HH:MM`. `horaFim` deve ser posterior a `horaInicio`.

**Resposta `201`:** objeto `Disponibilidade` criado.

**Erros:** `400` horaFim inválida. `403` Apenas psicólogos.

---

#### `DELETE /psicologos/disponibilidade/:id` — Remover disponibilidade
**JWT | Role: PSICOLOGO**

**Resposta `200`:**
```json
{ "mensagem": "Disponibilidade removida com sucesso" }
```

**Erros:** `403` Acesso negado. `404` Disponibilidade não encontrada.

---

### Consultas

#### `POST /consultas` — Agendar consulta
**JWT | Role: COLABORADOR**

**Body:**
```json
{
  "psicologoId": "uuid",
  "analiseId": "uuid-opcional",
  "dataHora": "2026-06-09T09:00:00.000Z",
  "observacoes": "Prefiro horário matutino"
}
```

**Validações automáticas:**
1. O psicólogo deve existir
2. O dia da semana e horário devem estar dentro de uma `Disponibilidade` cadastrada
3. O psicólogo não pode ter outra consulta `AGENDADA` ou `CONFIRMADA` no mesmo horário

**Resposta `201`:**
```json
{
  "id": "uuid",
  "dataHora": "2026-06-09T09:00:00.000Z",
  "status": "AGENDADA",
  "observacoes": "Prefiro horário matutino",
  "colaborador": { "usuario": { "nome": "João Silva" } },
  "psicologo": { "crp": "06/12345", "usuario": { "nome": "Dra. Ana" } },
  "analise": null
}
```

**Erros:** `400` Horário fora da disponibilidade. `403` Apenas colaboradores. `404` Psicólogo não encontrado. `409` Horário já ocupado.

---

#### `GET /consultas/minhas` — Listar minhas consultas
**JWT | qualquer papel**

Retorna as consultas do usuário logado (colaborador ou psicólogo), ordenadas da mais recente para a mais antiga.

**Resposta `200`:** array de objetos `Consulta` com dados de colaborador e psicólogo.

---

#### `GET /consultas/:id` — Buscar consulta por ID
**JWT | qualquer papel**

Colaborador só acessa suas próprias consultas. Psicólogo só acessa as suas.

**Resposta `200`:** objeto `Consulta` completo.

**Erros:** `403` Acesso negado. `404` Consulta não encontrada.

---

#### `DELETE /consultas/:id` — Cancelar consulta
**JWT | Role: COLABORADOR**

Cancela uma consulta `AGENDADA` ou `CONFIRMADA`. Não é possível cancelar consultas `REALIZADA` ou já `CANCELADA`.

**Resposta `200`:**
```json
{
  "id": "uuid",
  "status": "CANCELADA",
  ...
}
```

**Erros:** `400` Consulta já realizada/cancelada. `403` Apenas o colaborador dono. `404` Não encontrada.

---

#### `PATCH /consultas/:id/status` — Atualizar status
**JWT | Role: PSICOLOGO**

Apenas o psicólogo responsável pela consulta pode alterar o status.

**Body:**
```json
{
  "status": "CONFIRMADA"
}
```
> `status`: `AGENDADA` | `CONFIRMADA` | `CANCELADA` | `REALIZADA`

**Resposta `200`:** objeto `Consulta` atualizado.

**Erros:** `403` Não é o psicólogo responsável. `404` Não encontrada.

---

## Formato de Erro

Todos os erros retornam o mesmo formato, padronizado pelo `HttpExceptionFilter`:

```json
{
  "statusCode": 400,
  "mensagem": "Descrição do erro",
  "timestamp": "2026-05-08T14:30:00.000Z"
}
```

| Código | Significado |
|---|---|
| `400` | Dados inválidos ou regra de negócio violada |
| `401` | Token ausente, expirado ou credenciais inválidas |
| `403` | Sem permissão para o recurso |
| `404` | Recurso não encontrado |
| `409` | Conflito (ex: e-mail já cadastrado, horário ocupado) |
| `500` | Erro interno (ex: falha na API da Anthropic) |

---

## Testes

```bash
# Todos os testes unitários
npm test

# Com relatório de cobertura
npm run test:cov

# Modo watch
npm run test:watch
```

**5 suites — 43 testes — todos passando**

| Suite | Casos testados |
|---|---|
| `auth.service.spec.ts` | Registro com conflito de e-mail, criação de colaborador e psicólogo, login com credenciais inválidas, login com senha errada, login com sucesso, `me`, `atualizarPerfil` |
| `checkin.service.spec.ts` | Check-in de não-colaborador, criação + IA mockada, separação de campos por papel, acesso a check-in de outro usuário, `conteudoPsicologico` oculto para colaborador |
| `psicologo.service.spec.ts` | Listagem, criação com `ForbiddenException`, validação de hora inválida e igual, criação válida, remoção com `NotFoundException` e `ForbiddenException`, remoção com sucesso |
| `consulta.service.spec.ts` | Agendamento (5 casos), cancelamento (4 casos), atualização de status, listagem por papel |
| `app.controller.spec.ts` | Health check padrão |

> Todos os testes usam mocks do `PrismaService` e `AnthropicService`. Nenhum teste depende de banco de dados real.

---

## CI/CD

O arquivo `.github/workflows/ci.yml` define um pipeline de 4 etapas executado em todo push e pull request para `main` e `develop`:

```
[1] dependencies   npm ci + cache de node_modules
        ↓
[2] test           prisma generate → npm test:cov → upload coverage
        ↓
[3] build          tsc --noEmit → npm build → upload dist
        ↓
[4] docs           upload API.md → resumo no GitHub Step Summary
                   (apenas na branch main)
```

**Artefatos gerados:**
- `coverage-report/` — relatório de cobertura de testes (7 dias)
- `dist/` — build compilado (3 dias)
- `api-documentation/` — `API.md` (30 dias)

---

## Estrutura de Pastas

```
mentistech-backend/
├── .github/
│   └── workflows/
│       └── ci.yml                  # Pipeline CI GitHub Actions
├── prisma/
│   ├── schema.prisma               # Modelos e enums do banco
│   └── migrations/                 # Histórico de migrations
├── src/
│   ├── main.ts                     # Bootstrap (pipes, filtros, cors, porta)
│   ├── app.module.ts               # Módulo raiz + guards globais
│   ├── prisma/
│   │   ├── prisma.module.ts        # Módulo global do Prisma
│   │   └── prisma.service.ts       # PrismaClient com adapter-pg
│   ├── common/
│   │   ├── decorators/
│   │   │   ├── public.decorator.ts
│   │   │   ├── roles.decorator.ts
│   │   │   └── current-user.decorator.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   └── filters/
│   │       └── http-exception.filter.ts
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts      # POST /auth/register, /login | GET+PATCH /auth/me
│   │   ├── auth.service.ts
│   │   ├── auth.service.spec.ts
│   │   ├── strategies/
│   │   │   └── jwt.strategy.ts
│   │   └── dto/
│   │       ├── register.dto.ts
│   │       ├── login.dto.ts
│   │       ├── auth-response.dto.ts
│   │       └── update-perfil.dto.ts
│   ├── checkin/
│   │   ├── checkin.module.ts
│   │   ├── checkin.controller.ts   # POST / | GET /meus, /:id, /:id/analise
│   │   ├── checkin.service.ts
│   │   ├── checkin.service.spec.ts
│   │   ├── anthropic.service.ts    # Integração Claude API
│   │   └── dto/
│   │       ├── create-checkin.dto.ts
│   │       └── checkin-response.dto.ts
│   ├── psicologo/
│   │   ├── psicologo.module.ts
│   │   ├── psicologo.controller.ts # GET / | GET /:id/disponibilidade | POST+DELETE /disponibilidade
│   │   ├── psicologo.service.ts
│   │   ├── psicologo.service.spec.ts
│   │   └── dto/
│   │       └── criar-disponibilidade.dto.ts
│   └── consulta/
│       ├── consulta.module.ts
│       ├── consulta.controller.ts  # POST / | GET /minhas, /:id | DELETE /:id | PATCH /:id/status
│       ├── consulta.service.ts
│       ├── consulta.service.spec.ts
│       └── dto/
│           ├── agendar-consulta.dto.ts
│           ├── update-status.dto.ts
│           └── consulta-response.dto.ts
├── .env                            # Variáveis locais (não comitar)
├── .env.example                    # Template de variáveis
├── API.md                          # Documentação resumida dos endpoints
├── prisma.config.ts                # Configuração do Prisma v7
├── nest-cli.json
├── tsconfig.json
└── package.json
```
