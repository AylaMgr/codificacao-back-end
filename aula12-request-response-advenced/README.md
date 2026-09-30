# Aula 12: NestJS — Manipulação Avançada de Request, Response e Segurança

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=for-the-badge&logo=typescript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação da **Aula 12** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Nesta aula, exploramos conceitos avançados de manipulação das camadas de requisição (`Request`) e resposta (`Response`) no **NestJS**, implementando um controlador focado em fluxos de **Segurança** (`seguranca.controller.ts`).

---

## 🎯 Conteúdo Abordado

1. **Leitura e Manipulação de Headers HTTP:**
   * Uso do decorator `@Headers()` para extrair dados sensíveis e metadados enviados pelo cliente (ex: `Authorization`, `User-Agent`).
2. **Personalização do Status Code (`@HttpCode`):**
   * Ajuste do código de resposta HTTP padrão do NestJS utilizando `@HttpCode()` e o enum `HttpStatus`.
3. **Acesso aos Objetos Nativo da Plataforma (`@Req()` e `@Res()`):**
   * Manipulação direta dos objetos `Request` e `Response` da biblioteca subjacente (Express) quando há necessidade de controle total do fluxo da resposta.
4. **Controlador de Segurança (`seguranca.controller.ts`):**
   * Criação de rotas para validação de tokens, recebimento de credenciais e controle personalizado de respostas HTTP.

---

## 📂 Estrutura do Projeto

```text
aula12-request-response-advenced/
├── src/
│   ├── app.controller.ts          # Controller raiz
│   ├── app.module.ts              # Módulo principal com registro do SegurancaController
│   ├── app.service.ts             # Service raiz
│   ├── seguranca.controller.ts    # Controller focado em segurança e headers
│   └── main.ts                    # Ponto de entrada da aplicação
├── .gitignore                     # Arquivos ignorados pelo Git
├── package.json                   # Dependências e scripts do projeto
├── tsconfig.json                  # Configurações do TypeScript
└── README.md                      # Documentação da aula