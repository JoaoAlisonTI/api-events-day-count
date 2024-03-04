const express = require('express');
const app = express();
const User = require('./models/User');
const Event = require('./models/Event');

app.use(express.json());
 
 /*
 sequelize.sync({ force: true })
  .then(() => console.log('Modelos sincronizados com sucesso.'))
  .catch(err => console.error('Erro ao sincronizar os modelos:', err));
 */

module.exports = app;