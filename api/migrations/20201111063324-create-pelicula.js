'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Peliculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      duracionEnMinutos: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      generoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Generos',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Peliculas');
  }
};