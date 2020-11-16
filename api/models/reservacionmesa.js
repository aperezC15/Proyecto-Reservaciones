'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReservacionMesa = sequelize.define('ReservacionMesa', {
    fecha: DataTypes.DATE,
    personaId: DataTypes.INTEGER,
    mesaId: DataTypes.INTEGER,
    registroTemperaturaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    completada: DataTypes.BOOLEAN
  }, {});
  ReservacionMesa.associate = function(models) {
    // associations can be defined here
  };
  return ReservacionMesa;
};