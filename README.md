
# AtendeAI — Classificação Inteligente de Mensagens

Sistema de automação de atendimento que utiliza Inteligência Artificial para interpretar, classificar e encaminhar mensagens de clientes automaticamente.

## 1. Apresentação da Ideia

O AtendeAI surgiu da necessidade de melhorar a organização do atendimento ao cliente em pequenas e médias empresas.

Empresas recebem diariamente diversas mensagens com dúvidas, reclamações e solicitações. A análise e o encaminhamento manual dessas mensagens consomem tempo e dificultam a organização dos atendimentos.

A proposta é utilizar Inteligência Artificial para automatizar a interpretação e classificação das mensagens, reduzindo etapas manuais do processo.

## 2. Problema Escolhido

O projeto foi desenvolvido com base no cenário de Classificação de Mensagens, apresentado no desafio técnico da KODIE.

O problema consiste na dificuldade de organizar mensagens recebidas de clientes e identificar rapidamente:

- O tipo de solicitação.
- O assunto principal.
- A prioridade do atendimento.
- O departamento responsável.

## 3. Solução Proposta

O AtendeAI utiliza uma API integrada a um modelo de Inteligência Artificial para analisar mensagens e retornar informações estruturadas em JSON.

Após a classificação, o n8n recebe os dados e encaminha automaticamente o atendimento para um dos cinco departamentos:

- Logística.
- Financeiro.
- Atendimento.
- Suporte.
- Comercial.

A solução utiliza validação de dados para manter um padrão nas informações recebidas e retornadas.

## 4. Tecnologias Utilizadas

### Back-end
- Node.js
- Express
- JavaScript

### Inteligência Artificial
- OpenAI API
- Engenharia de prompts
- Zod para validação de dados estruturados

### Automação
- n8n
- Docker Desktop
- Docker Compose

### Ferramentas de desenvolvimento
- Visual Studio Code
- OpenCode
- Git
- GitHub

## 5. Funcionamento do Sistema

O funcionamento do AtendeAI ocorre nas seguintes etapas:

1. O cliente envia uma mensagem através do Webhook do n8n.
2. O n8n encaminha os dados para a API Express.
3. A API valida as informações recebidas.
4. O serviço de Inteligência Artificial analisa a mensagem.
5. A IA identifica categoria, assunto, prioridade, departamento e resumo.
6. O resultado é organizado em JSON.
7. O n8n utiliza o node Switch para identificar o departamento.
8. O fluxo encaminha a mensagem para o setor correspondente.
9. O Webhook retorna o resultado do processamento.

### Categorias de classificação

- `duvida`
- `reclamacao`
- `solicitacao`

### Prioridades

- `baixa`
- `media`
- `alta`

### Departamentos

- `atendimento`
- `financeiro`
- `logistica`
- `suporte`
- `comercial`

### Endpoints da API

| Método | Endpoint | Descrição |
|---|---|---|
| GET | / | Apresentação da API |
| GET | /health | Verificação de saúde |
| POST | /api/messages | Recebimento e classificação de mensagens |

### Exemplo de requisição

```json
{
  "customerName": "Carlos",
  "message": "Meu pedido está atrasado e ainda não chegou."
}
```

### Informações retornadas

A resposta contém:

- Nome do cliente.
- Mensagem original.
- Status da classificação.
- Categoria identificada.
- Assunto.
- Prioridade.
- Departamento responsável.
- Resumo da mensagem.
- Status do encaminhamento.

### Documentação visual do fluxo

As capturas de tela do projeto serão organizadas na pasta `docs/evidencias/`.

Serão documentados:

1. Fluxo completo do n8n.
2. Execução bem-sucedida.
3. Configurações dos nodes.
4. Resultados recebidos e processados.

### Workflow n8n

O arquivo exportado da automação está disponível em:

`docs/atendeai-workflow.json`

## 6. Como Executar

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Docker Desktop instalado e em execução.
- Chave de API da OpenAI.

### 1. Clonar o projeto

```bash
git clone URL_DO_REPOSITORIO
cd atendeai
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Configure suas variáveis localmente:

```env
PORT=3000
OPENAI_API_KEY=sua_chave
OPENAI_MODEL=gpt-6-luna
```

Nunca publique o arquivo `.env` ou sua chave de API.

### 4. Iniciar a API

```bash
npm run dev
```

A API ficará disponível em:

`http://localhost:3000`

### 5. Iniciar o n8n

Em outro terminal, execute:

```bash
docker compose up -d
```

Acesse:

`http://localhost:5678`

### 6. Importar o workflow

No n8n:

1. Acesse a opção de importar workflow.
2. Selecione o arquivo `docs/atendeai-workflow.json`.
3. Confira as configurações do Webhook e HTTP Request.
4. Publique o workflow após configurar o ambiente.

Observação: no ambiente atual de desenvolvimento, a API roda no Windows e o n8n no Docker. Por isso, o HTTP Request utiliza `host.docker.internal` para acessar a API.

## Testes Realizados

Foram realizados testes individuais com mensagens direcionadas aos cinco departamentos:

- Logística: pedido atrasado.
- Financeiro: cobrança duplicada.
- Atendimento: dúvida sobre horário de funcionamento.
- Suporte: erro de acesso ao aplicativo.
- Comercial: interesse em contratação e orçamento.

Os cinco caminhos foram executados com sucesso.

Também foi realizado um teste utilizando a Production URL do Webhook, com execução concluída com sucesso.

## Considerações Finais

O AtendeAI demonstra como a Inteligência Artificial pode ser integrada a uma API e a uma ferramenta de automação para solucionar um problema real de organização do atendimento.

O projeto foi desenvolvido como parte do Desafio Técnico de IA e Automação da KODIE.
