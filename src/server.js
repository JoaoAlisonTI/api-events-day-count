require('dotenv').config();

const app = require('./app');
const sequelize = require('./config/database');
const routes = require('./routes');

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});