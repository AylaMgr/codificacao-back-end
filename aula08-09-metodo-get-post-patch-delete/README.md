# Aulas 08 e 09: APIs RESTful com NestJS — CRUD Completo, DTOs e Validações

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=for-the-badge&logo=typescript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação completa das **Aulas 08 e 09** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Nestas aulas, avançamos no ecossistema **NestJS** construindo uma API RESTful completa com todas as operações CRUD (**GET**, **POST**, **PATCH**, **DELETE**), além da proteção de entrada de dados utilizando **DTOs (Data Transfer Objects)** e validação global com **ValidationPipe**.

---

## 🎯 Objetivos e Conceitos Aprendidos

1. **Ciclo Completo de Mapeamento HTTP:**
   * **`GET` (`@Get()`, `@Get(':id')`):** Consulta geral e busca filtrada por parâmetro de rota.
   * **`POST` (`@Post()`):** Cadastro de novos registros no servidor.
   * **`PATCH` (`@Patch(':id')`):** Atualização parcial refinada, alterando apenas os atributos informados no payload.
   * **`DELETE` (`@Delete(':id')`):** Remoção de entidades por identificador dinâmico.

2. **Camada DTO (Data Transfer Object):**
   * Padronização e tipagem rigorosa da estrutura de dados trafegada no corpo das requisições (`@Body()`).
   * Isolamento entre os dados recebidos do cliente e o modelo interno do sistema.

3. **Validação Automática com ValidationPipe:**
   * Utilização dos pacotes `class-validator` e `class-transformer` para validação e sanitização automática de requisições.
   * Rejeição automática de payloads malformados ou com propriedades não permitidas (`whitelist: true`).

---

## 📊 Comparativo Técnico: Validação Manual vs DTO + ValidationPipe

| Aspecto | Validação Manual na Rota | NestJS DTO + ValidationPipe |
| :--- | :--- | :--- |
| **Organização** | Código poluído com blocos `if/else` no Controller | Decorators declarativos e reutilizáveis na classe DTO |
| **Segurança** | Riscos de injeção de atributos indesejados | Filtra e bloqueia propriedades extras com `whitelist: true` |
| **Manutenibilidade** | Requer reescrever validações em cada endpoint | Reutiliza regras com suporte nativo a `PartialType` |
| **Resposta de Erro** | Formatos de erro inconsistentes por rota | Respostas HTTP 400 Bad Request padronizadas em JSON |

---

## 📂 Estrutura do Projeto

```text
aula-08-09-projeto-nestjs/
├── src/
│   ├── dto/
│   │   ├── create-produto.dto.ts   # DTO com regras de validação para criação
│   │   └── update-produto.dto.ts   # DTO estendido para atualização parcial
│   ├── app.controller.ts           # Controlador expondo os endpoints CRUD
│   ├── app.module.ts               # Módulo raiz da aplicação
│   ├── app.service.ts              # Regras de negócio e manipulação em memória
│   └── main.ts                     # Ponto de entrada com ValidationPipe global
├── nest-cli.json                   # Configuração da CLI do NestJS
├── package.json                    # Dependências e scripts do projeto
├── tsconfig.json                   # Configurações do compilador TypeScript
└── README.md                       # Documentação das aulas