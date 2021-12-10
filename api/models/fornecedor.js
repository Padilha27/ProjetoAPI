'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fornecedor = sequelize.define('Fornecedor', {
    nome: DataTypes.STRING,
    ingrediente: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Fornecedor.associate = function(models) {
    // associations can be defined here
  };
  return Fornecedor;
};