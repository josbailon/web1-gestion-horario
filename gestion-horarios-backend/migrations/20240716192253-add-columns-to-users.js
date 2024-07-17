//migrations/add columns to users.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'city', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('Users', 'telefono', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('Users', 'cedula', {
      type: Sequelize.STRING,
      allowNull: true
    });
    // Añade más columnas si es necesario
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'city');
    await queryInterface.removeColumn('Users', 'telefono');
    await queryInterface.removeColumn('Users', 'cedula');
    // Elimina más columnas si es necesario
  }
};
