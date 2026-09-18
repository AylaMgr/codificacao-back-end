# Aula 05: Variáveis de Ambiente e Configurações no Node.js — Guia Completo

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![Dotenv](https://img.shields.io/badge/Dotenv-v16-yellow?style=for-the-badge&logo=dotenv)
![JavaScript](https://img.shields.io/badge/ECMAScript-ESM-yellow?style=for-the-badge&logo=javascript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação completa da **Aula 05** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Esta aula aborda a gestão segura de dados sensíveis e configurações de infraestrutura através de **Variáveis de Ambiente** no Node.js com o pacote `dotenv`, garantindo boas práticas de segurança com `.env`, `.env.example` e `.gitignore`.

---

## Por Que Utilizar Variáveis de Ambiente?

Gravar chaves de API, senhas de banco de dados ou portas de servidor diretamente no código-fonte (*hardcoding*) é uma falha grave de segurança. As variáveis de ambiente resolvem este problema ao garantir:

1. **Segurança de Dados Sensíveis:** Impede o vazo de credenciais e segredos em repositórios públicos do GitHub.
2. **Flexibilidade Multiambiente:** Permite alterar parâmetros da aplicação (porta, URL de banco de dados) entre ambientes de Desenvolvimento, Homologação e Produção sem alterar o código.
3. **Padronização de Implementação:** Centraliza todas as configurações num único ficheiro de leitura local.

---

## Comparativo Técnico: Hardcoding vs. Ficheiro `.env`

| Característica | Configuração Direta (Hardcoding) | Variáveis de Ambiente (`.env`) |
| :--- | :--- | :--- |
| **Segurança** | **Baixa** (credenciais expostas no código) | **Alta** (ficheiro ignorado pelo Git) |
| **Gerais do Ambiente** | Requer edição direta de ficheiros `.js` | Alteração rápida no `.env` local |
| **Controlo de Versão** | Risco de subir dados privados para o GitHub | Apenas o `.env.example` é enviado ao repositório |
| **Leitura no Node.js** | Variáveis globais fixas | Acesso via objeto `process.env` |

---

## Módulos e Conceitos Chave

### 1. Pacote `dotenv`
Biblioteca responsável por carregar as variáveis declaradas no ficheiro `.env` para o objeto global `process.env` do Node.js antes da execução da lógica principal.

### 2. Objeto `process.env`
Objeto global nativo do Node.js que armazena todas as variáveis de ambiente do sistema operacional e as injetadas pelo pacote `dotenv`.

### 3. Ficheiros de Configuração e Controlo

* **`.env`**: Ficheiro privado contendo os valores reais das credenciais (nunca deve ser enviado ao GitHub).
* **`.env.example`**: Ficheiro de modelo público que lista as chaves necessárias sem os valores reais.
* **`.gitignore`**: Ficheiro de instrução do Git para ignorar a pasta `node_modules/` e o ficheiro `.env`.

---

## Estrutura do Projeto

```text
aula05-variaveis-ambiente-configuracoes/
├── node_modules/             # Dependências instaladas via npm
├── .env                      # Ficheiro local com dados sensíveis (ignorado no Git)
├── .env.example              # Modelo de variáveis de ambiente para repositório
├── .gitignore                # Regras de exclusão para o controlo de versão
├── app.js                    # Ponto de entrada que carrega as variáveis de ambiente
├── package.json              # Configuração do projeto e dependências
├── package-lock.json         # Registo exato de versões das dependências
└── README.md                 # Documentação da aula