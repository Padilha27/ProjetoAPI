'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    lanche: DataTypes.STRING,
    ingrediente1: DataTypes.STRING,
    ingrediente2: DataTypes.STRING,
    ingrediente3: DataTypes.STRING,
    ingrediente4: DataTypes.STRING,
    preco: DataTypes.INTEGER

  }, {});
  Produto.associate = function(models) {
    // associations can be defined here
  };
  return Produto;
};