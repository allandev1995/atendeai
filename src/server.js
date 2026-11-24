
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const messageRoutes = require('./routes/messageRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Bem-vindo ao AtendeAI!',
    description: 'API de classificação inteligente de mensagens.',
    version: '1.0.0'
  });
});

// Saúde da API
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'online',
    service: 'AtendeAI API'
  });
});

// Rotas de mensagens
app.use('/api/messages', messageRoutes);

// Inicialização
app.listen(PORT, () => {
  console.log(`🚀 AtendeAI rodando em http://localhost:${PORT}`);
});
