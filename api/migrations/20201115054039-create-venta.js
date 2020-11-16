'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ventas', {
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
      programacionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Programacion',
          key: 'id'
        }
      },
      asientoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Asientos',
          key: 'id'
        }
      },
      personaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Personas',
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
      registroTemperaturaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'RegistrosTemperatura',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ventas');
  }
};