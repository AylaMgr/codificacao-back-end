# Aulas 08 e 09: API RESTful com NestJS — Gestão de Convidados (CRUD, DTOs e Validações)

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=for-the-badge&logo=typescript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação das **Aulas 08 e 09** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Nestas aulas, construímos um serviço de **Gestão de Convidados** utilizando **NestJS**, cobrindo todas as operações HTTP de um CRUD (**GET**, **POST**, **PATCH**, **DELETE**), além do isolamento de dados com **DTOs** e validação de requisições via `ValidationPipe`.

---

## 🎯 O Que Foi Desenvolvido

1. **Recurso de Convidados (`/convidados`):**
   * **`GET /convidados`**: Retorna a lista de convidados cadastrados.
   * **`GET /convidados/:id`**: Busca um convidado específico por ID.
   * **`POST /convidados`**: Cadastra um novo convidado no sistema.
   * **`PATCH /convidados/:id`**: Atualiza dados específicos de um convidado.
   * **`DELETE /convidados/:id`**: Remove um convidado da lista.

2. **Validação e Tipagem de Dados (DTO):**
   * Criação do `criar-convidado.dto.ts` para aplicar regras de validação nos dados recebidos via `@Body()`.
   * Proteção das rotas contra payloads inválidos através do `ValidationPipe` global ativado no `main.ts`.

3. **Arquitetura Modular:**
   * Separação de responsabilidades entre Controladores (`ConvidadosController`), Serviços (`ConvidadosService`) e Injeção de Dependências no Módulo Principal (`AppModule`).

---

## 📂 Estrutura do Projeto

```text
aula08-09-metodo-get-post-patch-delete/
├── src/
│   ├── app.controller.spec.ts    # Testes unitários do controller base
│   ├── app.controller.ts         # Controller raiz
│   ├── app.module.ts             # Módulo principal agrupando controllers e services
│   ├── app.service.ts            # Service raiz
│   ├── convidados.controller.ts  # Endpoints da rota /convidados
│   ├── convidados.service.ts     # Regras de negócio e armazenamento de convidados
│   ├── criar-convidado.dto.ts    # DTO com validações para o cadastro de convidado
│   └── main.ts                   # Bootstrap com ValidationPipe global
├── test/                         # Arquivos de teste e2e
├── .gitignore                    # Regras de ignorados do Git
├── .oxlintrc.json                # Configuração do linter Oxlint
├── .prettierrc                   # Configurações do Prettier
├── nest-cli.json                 # Configuração do Nest CLI
├── package.json                  # Dependências e scripts do projeto
├── tsconfig.json                 # Configurações do TypeScript
├── vitest.config.ts              # Configuração do Vitest para testes
└── README.md                     # Documentação da aula