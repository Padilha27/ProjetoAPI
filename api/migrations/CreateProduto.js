'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lanche: {
        type: Sequelize.STRING
      },
      ingrediente1: {
        type: Sequelize.STRING
      },
      ingrediente2: {
        type: Sequelize.STRING
      },
      ingrediente3: {
        type: Sequelize.STRING
      },
      ingrediente4: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Produto');
  }
};