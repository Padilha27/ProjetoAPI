'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    nome: DataTypes.STRING,
    ativo: DataTypes.TEXT,
    email: DataTypes.STRING,
    telefone: DataTypes.INTEGER,
  }, {});
  Clientes.associate = function(models) {
    // associations can be defined here
  };
  return Clientes;
};