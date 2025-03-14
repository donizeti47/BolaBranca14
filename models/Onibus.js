// models/Onibus.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importe a instância do Sequelize

const Onibus = sequelize.define('Onibus', {
  numeroCarro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carroceria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
  },
});

module.exports = Onibus;