const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const pictureRouter = require('../routes/picture');
const bannerRouter = require('../routes/banner');
const userRouter = require('../routes/user');
const authenticateToken = require('../middleware/authMiddleware');

// Middleware para permitir CORS
app.use(cors());
app.use(express.json());

// Rotas principais
app.use('/pictures', pictureRouter);
app.use('/banner', bannerRouter);
app.use('/users', userRouter);

// Middleware para servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Middleware para servir o painel (supondo que `authenticateToken` verifica o token de autenticação)
app.use(
  '/painel',
  authenticateToken,
  express.static(path.resolve(__dirname, '..', 'painel.html'))
);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`URL: ${process.env.URL}`);
});
