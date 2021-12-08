'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funcionarios = sequelize.define('Funcionarios', {
    nome: DataTypes.STRING,
    cargo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {});
  Funcionarios.associate = function(models) {
    // associations can be defined here
  };
  return Funcionarios;
};