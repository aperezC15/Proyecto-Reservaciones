'use strict';
module.exports = (sequelize, DataTypes) => {
  const HorarioGimnasio = sequelize.define('HorarioGimnasio', {
    descripcion: DataTypes.STRING,
    habilitado: DataTypes.BOOLEAN
  }, {});
  HorarioGimnasio.associate = function(models) {
    // associations can be defined here
  };
  return HorarioGimnasio;
};