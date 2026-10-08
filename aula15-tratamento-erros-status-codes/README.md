# Aula 15: NestJS — Tratamento Global de Erros, Exceções e Status Codes HTTP

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=for-the-badge&logo=typescript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação da **Aula 15** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Nesta aula, exploramos o uso de **Exceções HTTP integradas** do **NestJS** (`HttpException`, `NotFoundException`, `BadRequestException`) e a padronização de códigos de resposta (`Status Codes`) no serviço de **Produtos**.

---

## 🎯 Conteúdo Abordado

1. **Exceções do NestJS (`@nestjs/common`):**
   * Lançamento de exceções apropriadas para cenários de erro (ex: `NotFoundException` quando um produto não é localizado).
2. **Códigos de Estado HTTP (`HttpStatus` / `@HttpCode`):**
   * Garantia do retorno de códigos padronizados do protocolo HTTP (`200 OK`, `400 Bad Request`, `404 Not Found`).
3. **Módulo de Produtos (`/produtos`):**
   * Consulta de lista de produtos e busca individualizada com tratamento defensivo contra IDs inexistentes.

---

## 📂 Estrutura do Projeto

```text
aula15-tratamento-erros-status-codes/
├── src/
│   ├── app.controller.spec.ts     # Teste do controller raiz
│   ├── app.controller.ts          # Controller raiz da aplicação
│   ├── app.module.ts              # Módulo principal agrupando controllers e services
│   ├── app.service.ts             # Service raiz
│   ├── main.ts                    # Ponto de entrada do servidor NestJS
│   ├── produtos.controller.ts     # Rotas HTTP para gerenciamento de produtos
│   └── produtos.service.ts        # Regras de negócio, catálogo e tratamento de erros
├── test/                          # Testes de integração (e2e)
├── .gitignore                     # Arquivos ignorados pelo Git
├── .oxlintrc.json                 # Configuração do linter Oxlint
├── .prettierrc                    # Formatação de código Prettier
├── nest-cli.json                  # Configurações da CLI do NestJS
├── package.json                   # Dependências e scripts do projeto
├── tsconfig.json                  # Configurações do TypeScript
└── README.md                      # Documentação da aula