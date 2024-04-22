'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('usuarios', {
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      usuario: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      perfil: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.INTEGER
      },
      ultimo_login: {
        type: Sequelize.DATE
      },
      fecha: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
