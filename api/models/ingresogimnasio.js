'use strict';
module.exports = (sequelize, DataTypes) => {
  const IngresoGimnasio = sequelize.define('IngresoGimnasio', {
    fecha: DataTypes.DATE,
    personaId: DataTypes.INTEGER,
    registroTemperaturaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    horarioId: DataTypes.INTEGER,
    rutinaEjercicioId: DataTypes.INTEGER
  }, {});
  IngresoGimnasio.associate = function(models) {
    // associations can be defined here
  };
  return IngresoGimnasio;
};