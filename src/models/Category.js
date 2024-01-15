const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelizeConnection');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Category.sync();

module.exports = Category;
