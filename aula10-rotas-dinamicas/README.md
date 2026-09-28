# Aula 10: NestJS — Rotas Dinâmicas e Parâmetros de Rota (@Param)

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=for-the-badge&logo=typescript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação da **Aula 10** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Esta aula introduz o conceito de **Rotas Dinâmicas** e manipulação de parâmetros da URL (`@Param()`) no **NestJS**, utilizando o módulo simples de **Jogos**.

---

## 🎯 Conteúdo Abordado

1. **Rotas Dinâmicas (`/jogos/:id`):** Definição de endpoints que recebem identificadores variáveis diretamente no caminho da URL.
2. **Decorator `@Param()`:** Captura dos parâmetros enviados pela requisição e repasse para as regras de negócio.
3. **Organização em Serviços e Controladores:** Separação entre a rota (`jogos.controller.ts`) e a lógica de busca do dado (`jogos.service.ts`).

---

## 📂 Estrutura do Projeto

```text
aula10-rotas-dinamicas/
├── src/
│   ├── app.controller.spec.ts    # Teste do controller padrão
│   ├── app.controller.ts         # Controller raiz
│   ├── app.module.ts             # Módulo principal com registro dos componentes
│   ├── app.service.ts            # Service raiz
│   ├── jogos.controller.ts       # Controller com as rotas dinâmicas de jogos
│   ├── jogos.service.ts          # Service com a lógica de busca de jogos
│   └── main.ts                   # Ponto de entrada da aplicação
├── test/                         # Testes e2e
├── .gitignore                    # Arquivos ignorados pelo Git
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configurações do TypeScript
└── README.md                     # Documentação da aula