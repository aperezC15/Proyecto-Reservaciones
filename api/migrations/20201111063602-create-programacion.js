'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Programacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATE
      },
      precio: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      peliculaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Peliculas',
          key: 'id'
        }
      },
      salaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Salas',
          key: 'id'
        }
      },
      horarioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Horarios',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Programacion');
  }
};