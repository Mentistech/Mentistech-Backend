# MentisTech Backend — Documentação de Endpoints

Base URL: `http://localhost:3000`

---

## POST /auth/register
**Auth**: pública  
**Role**: —  
**Body**:
```json
{
  "nome": "string",
  "email": "string (email)",
  "senha": "string (min 6)",
  "papel": "COLABORADOR | PSICOLOGO",
  "departamento": "string? (apenas COLABORADOR)",
  "cargo": "string? (apenas COLABORADOR)",
  "crp": "string? (apenas PSICOLOGO)",
  "especialidade": "string? (apenas PSICOLOGO)"
}
```
**Resposta**:
```json
{
  "token": "string (JWT)",
  "papel": "COLABORADOR | PSICOLOGO",
  "nome": "string",
  "usuarioId": "string (UUID)"
}
```

---

## POST /auth/login
**Auth**: pública  
**Role**: —  
**Body**:
```json
{
  "email": "string",
  "senha": "string"
}
```
**Resposta**:
```json
{
  "token": "string (JWT)",
  "papel": "COLABORADOR | PSICOLOGO",
  "nome": "string",
  "usuarioId": "string (UUID)"
}
```

---

## POST /checkin
**Auth**: requerida (Bearer token)  
**Role**: COLABORADOR  
**Body**:
```json
{
  "humor": "MUITO_BEM | BEM | NEUTRO | MAL | MUITO_MAL",
  "nivelEstresse": "number (1–10)"
}
```
**Resposta**:
```json
{
  "id": "string (UUID)",
  "humor": "string",
  "nivelEstresse": "number",
  "realizadoEm": "string (ISO datetime)",
  "respostaIa": "string (mensagem de suporte da IA)"
}
```

---

## GET /checkin/meus
**Auth**: requerida  
**Role**: COLABORADOR  
**Body**: —  
**Resposta**: array de check-ins com análise parcial
```json
[
  {
    "id": "string",
    "humor": "string",
    "nivelEstresse": "number",
    "realizadoEm": "string",
    "analise": {
      "respostaIa": "string",
      "geradoEm": "string"
    }
  }
]
```

---

## GET /checkin/:id/analise
**Auth**: requerida  
**Role**: qualquer autenticado  
**Body**: —  
**Resposta (COLABORADOR)**:
```json
{
  "id": "string",
  "humor": "string",
  "nivelEstresse": "number",
  "realizadoEm": "string",
  "respostaIa": "string",
  "geradoEm": "string"
}
```
**Resposta (PSICOLOGO)**:
```json
{
  "id": "string",
  "humor": "string",
  "nivelEstresse": "number",
  "realizadoEm": "string",
  "analise": {
    "respostaIa": "string",
    "conteudoPsicologico": "string",
    "geradoEm": "string"
  }
}
```

---

## GET /psicologos
**Auth**: pública  
**Role**: —  
**Body**: —  
**Resposta**: array de psicólogos
```json
[
  {
    "id": "string",
    "crp": "string",
    "especialidade": "string",
    "usuario": { "nome": "string", "email": "string" },
    "disponibilidades": [...]
  }
]
```

---

## GET /psicologos/:id/disponibilidade
**Auth**: pública  
**Role**: —  
**Body**: —  
**Resposta**:
```json
[
  {
    "id": "string",
    "diaSemana": "SEGUNDA | TERCA | QUARTA | QUINTA | SEXTA | SABADO | DOMINGO",
    "horaInicio": "string (HH:MM)",
    "horaFim": "string (HH:MM)"
  }
]
```

---

## POST /psicologos/disponibilidade
**Auth**: requerida  
**Role**: PSICOLOGO  
**Body**:
```json
{
  "diaSemana": "SEGUNDA | TERCA | QUARTA | QUINTA | SEXTA | SABADO | DOMINGO",
  "horaInicio": "string (HH:MM)",
  "horaFim": "string (HH:MM)"
}
```
**Resposta**: objeto `Disponibilidade` criado

---

## POST /consultas
**Auth**: requerida  
**Role**: COLABORADOR  
**Body**:
```json
{
  "psicologoId": "string (UUID)",
  "analiseId": "string? (UUID)",
  "dataHora": "string (ISO 8601)",
  "observacoes": "string?"
}
```
**Resposta**: objeto `Consulta` com colaborador, psicólogo e análise

---

## GET /consultas/minhas
**Auth**: requerida  
**Role**: qualquer autenticado  
**Body**: —  
**Resposta**: lista de consultas do usuário logado (colaborador ou psicólogo), ordenada por data decrescente

---

## PATCH /consultas/:id/status
**Auth**: requerida  
**Role**: PSICOLOGO  
**Body**:
```json
{
  "status": "AGENDADA | CONFIRMADA | CANCELADA | REALIZADA"
}
```
**Resposta**: objeto `Consulta` atualizado

---

## Formato de Erro (todos os endpoints)
```json
{
  "statusCode": 400,
  "mensagem": "string com a descrição do erro",
  "timestamp": "string (ISO datetime)"
}
```
