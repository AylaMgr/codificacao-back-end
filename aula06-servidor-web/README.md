# Aula 06: Criando um Servidor Web HTTP Nativo — Guia Completo

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![JavaScript](https://img.shields.io/badge/ECMAScript-ESM-yellow?style=for-the-badge&logo=javascript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação completa da **Aula 06** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Esta aula explora a criação de um servidor web sem dependências externas utilizando o módulo nativo `http` do Node.js, abordando roteamento manual, respostas em JSON e adição de cabeçalhos de segurança (*HTTP Headers*).

---

## Por Que Compreender o Módulo Nativo `http`?

Antes de utilizar *frameworks* de alto nível como o Express.js, é fundamental entender a camada de baixo nível que o Node.js disponibiliza para comunicação web. Essa abordagem proporciona:

1. **Zero Dependências Externas:** A aplicação roda apenas com os recursos nativos da plataforma Node.js.
2. **Entendimento de Baixo Nível:** Permite manipular diretamente o fluxo de requisição (`req`) e resposta (`res`), compreendendo o protocolo HTTP na sua essência.
3. **Controlo Fino de Cabeçalhos e Status:** Demonstra como injetar cabeçalhos de segurança e códigos de resposta HTTP manualmente.

---

## Comparativo Técnico: HTTP Nativo vs. Frameworks Web

| Característica | Servidor HTTP Nativo (`node:http`) | Frameworks (ex: Express.js) |
| :--- | :--- | :--- |
| **Dependências** | **Nenhuma** (Incluso na runtime do Node.js) | Requer pacotes externos via `npm` |
| **Roteamento** | Manual via estruturas condicionais (`if/else`) | Declarativo via métodos (`app.get`, `app.post`) |
| **Cabeçalhos e Status** | Definidos manualmente em cada rota | Abstraídos por métodos utilitários |
| **Indicado Para** | Compreensão de fundamentos e microsserviços ultraleves | APIs RESTful comerciais e aplicações complexas |

---

## Módulos e Conceitos Chave

### 1. `http.createServer(callback)`
Método responsável por instanciar a aplicação servidor. A função de *callback* é executada a cada requisição recebida, fornecendo os objetos `req` (*IncomingMessage*) e `res` (*ServerResponse*).

### 2. Mapeamento de Rotas (`req.url` e `req.method`)
Permite inspecionar a rota solicitada pelo cliente e o método HTTP enviado (`GET`, `POST`, etc.) para direcionar o fluxo de execução.

### 3. Cabeçalhos de Segurança (*Security Headers*)
Injeção de políticas no cabeçalho de resposta HTTP para proteção básica contra vulnerabilidades web:
* **`X-Content-Type-Options: nosniff`**: Impede que os navegadores façam a interpretação incorreta do tipo de conteúdo (*MIME sniffing*).
* **`X-Frame-Options: DENY`**: Protege a aplicação contra ataques de *Clickjacking*, proibindo a exibição do site dentro de `<iframe` ou `<frame>`.

---

## Estrutura do Projeto

```text
aula06-servidor-web/
├── package.json        # Configuração do projeto habilitando ES Modules
├── servidor.js         # Aplicação principal do servidor HTTP nativo
└── README.md           # Documentação da aula