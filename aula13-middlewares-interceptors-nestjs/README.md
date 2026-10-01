# Aula 13: NestJS — Middlewares e Módulo Logger (Rotas Admin e Públicas)

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=for-the-badge&logo=typescript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação da **Aula 13** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Nesta aula, exploramos a criação e aplicação de **Middlewares** no **NestJS** utilizando o gerador da CLI (`nest g mi logger`), interceptando requisições HTTP para registar logs de acesso em rotas administrativas (`/admin`) e públicas (`/publica`).

---

## 🎯 Conteúdo Abordado

1. **Geração de Middleware via CLI (`nest g mi logger`):**
   * Criação automatizada da estrutura base de um middleware implementando a interface `NestMiddleware`.
2. **Interceção e Registo de Logs:**
   * Leitura de dados da requisição (`method`, `originalUrl`) e cálculo do tempo de resposta do servidor.
3. **Mapeamento de Rotas no `AppModule`:**
   * Utilização da interface `NestModule` e do `MiddlewareConsumer` para aplicar o middleware de forma seletiva.
4. **Diferenciação de Contextos:**
   * Definição de endpoints com acessos e níveis de registo distintos (Rota Admin vs. Rota Pública).

---

## 📂 Estrutura do Projeto

```text
aula13-logger-middleware/
├── src/
│   ├── logger/
│   │   └── logger.middleware.ts   # Middleware gerado para registo de logs de requisição
│   ├── app.controller.ts          # Controller contendo os endpoints /admin e /publica
│   ├── app.module.ts              # Módulo principal com a configuração do MiddlewareConsumer
│   ├── app.service.ts             # Service base
│   └── main.ts                    # Ponto de entrada da aplicação
├── .gitignore                     # Ficheiros ignorados pelo Git
├── package.json                   # Dependências e scripts do projeto
├── tsconfig.json                  # Configurações do TypeScript
└── README.md                      # Documentação da aula