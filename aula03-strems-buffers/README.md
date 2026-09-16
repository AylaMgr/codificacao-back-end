# Aula 03: Streams e Buffers no Node.js — Guia Completo

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![JavaScript](https://img.shields.io/badge/ECMAScript-ESM-yellow?style=for-the-badge&logo=javascript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação completa da **Aula 03** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Esta aula aborda o processamento eficiente de dados em larga escala no Node.js utilizando **Streams** e **Buffers**, demonstrando como manipular arquivos de log massivos sem esgotar a memória RAM da aplicação.

---

## Por Que Usar Streams e Buffers?

Ao trabalhar no Back-End, o carregamento de arquivos de grande porte (como logs do servidor de múltiplos gigabytes) utilizando métodos tradicionais como `fs.readFile()` pode causar o travamento ou o encerramento inesperado do processo (*Out of Memory Crash*). As **Streams** e **Buffers** resolvem esse problema oferecendo três grandes vantagens:

1. **Baixo Consumo de Memória (Low RAM Footprint):** Em vez de carregar um arquivo inteiro na memória RAM, o arquivo é fracionado e processado em pequenos pedaços (*chunks*) sequenciais.
2. **Tempo de Resposta Imediato (Time-to-First-Byte):** O processamento ou a transmissão dos dados começa imediatamente ao receber o primeiro *chunk*, sem a necessidade de aguardar a leitura total do arquivo.
3. **Escalabilidade de Servidor:** Permite que aplicações lidem simultaneamente com múltiplos fluxos de dados contínuos, uploads pesados e relatórios extensos de forma fluida.

---

## Comparativo Técnico: Processamento Tradicional vs. Streams

O Node.js oferece abordagens distintas para a leitura e escrita de dados em disco. Compreender quando usar cada uma é fundamental para a otimização de performance.

| Característica | Processamento Tradicional (`fs.readFile`) | Processamento via Streams (`fs.createReadStream`) |
| :--- | :--- | :--- |
| **Consumo de Memória** | **Alto** (Carrega 100% do arquivo na RAM) | **Baixo** (Aloca apenas o tamanho de um *chunk* por vez) |
| **Tempo para 1º Dado** | Demorado (Aguarda a leitura completa) | Instantâneo (Processa no recebimento do primeiro pacote) |
| **Limite de Arquivo** | Limitado pelo espaço total da RAM do servidor | Ilimitado (Processa arquivos maiores que a própria RAM) |
| **Estrutura de Leitura** | Retorna um `Buffer` único ou `String` massiva | Funciona via eventos (`data`, `end`) ou iteração assíncrona |
| **Indicado Para** | Arquivos pequenos (ex: configurações, JSONs leves) | Logs massivos, vídeos, arquivos binários, relatórios em lote |

---

## Módulos e Conceitos Nativos do Node.js

Para manipular fluxos contínuos de dados, o Node.js utiliza recursos integrados de baixo nível:

### 1. `Buffer`
Espaço temporário de memória alocado fora do ecossistema V8 para armazenar dados binários brutos (bytes) que estão sendo transferidos entre um ponto e outro.

### 2. Módulo `node:fs` (File System via Streams)
Fornece utilitários para criar fluxos contínuos de leitura e escrita:
* **`fs.createReadStream(path, options)`**: Cria uma stream de leitura para processar o arquivo em partes.
* **`fs.createWriteStream(path, options)`**: Cria uma stream de escrita para gravar dados sequencialmente no disco.

### 3. Módulo `node:readline`
Permite a leitura de fluxos legíveis (*Readable Streams*) linha por linha de forma eficiente, perfeito para parsing e filtragem de arquivos de texto ou logs.

---

## Atividade Prática: O Filtrador de Logs Massivos

Aplicação prática voltada para a geração de um arquivo de log extenso e o posterior processamento por streaming para extração e isolamento exclusivo de registros de falhas (`[ERROR]`).

### Estrutura do Projeto

```text
aula03-strems-buffers/
├── apenas erros.log          # Arquivo gerado automaticamente contendo os erros filtrados
├── gerarLogGigante.js        # Script utilitário para geração da massa de dados de log
├── package.json              # Configuração do projeto habilitando ESM
├── processarLogs.js          # Script principal de leitura e escrita por streams
└── README.md                 # Documentação da aula