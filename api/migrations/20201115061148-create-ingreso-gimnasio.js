'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('IngresosGimnasio', {
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
      horarioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'HorariosGimnasio',
          key: 'id'
        }
      },
      rutinaEjercicioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'RutinasEjercicios',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('IngresosGimnasio');
  }
};