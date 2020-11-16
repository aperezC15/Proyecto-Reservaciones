'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ReservacionesMesas', {
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
      personaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Personas',
          key: 'id'
        }
      },
      mesaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Mesas',
          key: 'id'
        }
      },
      registroTemperaturaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'RegistrosTemperatura',
          key: 'id'
        }
      },
      usuarioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      completada: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ReservacionesMesas');
  }
};