const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_ADDON_NAME,
  process.env.DATABASE_ADDON_USER,
  process.env.DATABASE_ADDON_PASSWORD,
  {
    host: process.env.DATABASE_ADDON_HOST,
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
