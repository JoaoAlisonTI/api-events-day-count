require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');
const routes = require('./routes');

app.use('/', routes);

sequelize.sync()
 .then(() => console.log('Modelos sincronizados com sucesso.'))
 .catch(err => console.error('Erro ao sincronizar os modelos:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});