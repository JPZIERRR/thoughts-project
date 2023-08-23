const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  },
);

try {
  sequelize.authenticate();
  console.log('Conectado!');
} catch (error) {
  console.log('Não foi possível conectar:', error);
}

module.exports = sequelize;
