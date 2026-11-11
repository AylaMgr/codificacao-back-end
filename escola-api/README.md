Escola Api

Documentação de aprendizado sobre banco de dados para o curso full stack

🚀 Tecnologias e Ferramentas

As seguintes ferramentas e tecnologias foram utilizadas na construção deste projeto:

NestJS - Framework Node.js progressivo para a construção de aplicações escaláveis do lado do servidor.

TypeScript - Superset JavaScript com tipagem estática.

MongoDB - Banco de dados NoSQL orientado a documentos.

MongoDB Compass - Interface gráfica oficial para visualização e gerenciamento do banco MongoDB.

Vitest - Framework de testes unitários e E2E ultrarrápido.

Oxlint & Prettier - Linter e formatador de código para garantia de padrões.

Insomnia - Cliente HTTP para testar as rotas da API.

🛠️ Como Executar o Projeto

Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

Node.js (versão LTS recomendada)

MongoDB ou uma instância no MongoDB Atlas

MongoDB Compass (opcional, para visualização do banco)

Insomnia (para testes da API)

1. Clonar o Repositório

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


2. Instalar Dependências

npm install


3. Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com a string de conexão do seu MongoDB e a porta do servidor:

PORT=3000
MONGO_URI=mongodb://localhost:27017/nome-do-seu-banco


4. Executar a Aplicação

# Modo de desenvolvimento
npm run start:dev

# Modo de produção
npm run build
npm run start:prod


A aplicação estará rodando na porta indicada (ex: http://localhost:3000).

🧪 Rodando os Testes

# Testes unitários
npm run test

# Testes End-to-End (E2E)
npm run test:e2e


📬 Testando as Rotas (Insomnia)

Você pode importar as requisições no seu Insomnia para testar os endpoints disponíveis na API:

Abra o Insomnia.

Clique em Import -> From File ou crie uma nova Collection.

Utilize a URL base da aplicação (http://localhost:3000) para disparar as requisições.

📄 Licença

Este projeto está sob a licença MIT.