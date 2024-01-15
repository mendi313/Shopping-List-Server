const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelizeConnection');

const Order = sequelize.define('Order', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  products: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

Order.sync();

module.exports = Order;
