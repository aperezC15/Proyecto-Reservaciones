'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PersonalLimpieza', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Personas',
          key: 'id'
        }
      },
      horarioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'HorariosGimnasio',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PersonalLimpieza');
  }
};