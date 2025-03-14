// models/Servico.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importe a instância do Sequelize

const Servico = sequelize.define('Servico', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  carroNumero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  horaSaida: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horaChegada: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  linhaNumero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Servico;