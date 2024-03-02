const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

sequelize.authenticate()
 .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
 .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

module.exports = sequelize;