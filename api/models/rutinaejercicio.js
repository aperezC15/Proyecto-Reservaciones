'use strict';
module.exports = (sequelize, DataTypes) => {
  const RutinaEjercicio = sequelize.define('RutinaEjercicio', {
    descripcion: DataTypes.STRING
  }, {});
  RutinaEjercicio.associate = function(models) {
    // associations can be defined here
  };
  return RutinaEjercicio;
};