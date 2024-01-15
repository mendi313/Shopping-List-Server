const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('shop', `${process.env.USER_NAME}`, `${process.env.PASSWORD}`, {
  dialect: 'mysql',
});

module.exports = { sequelize }; 
