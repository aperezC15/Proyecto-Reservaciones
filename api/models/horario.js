'use strict';
module.exports = (sequelize, DataTypes) => {
  const Horario = sequelize.define('Horarios', {
    descripcion: DataTypes.STRING
  }, {});
  Horario.associate = function(models) {
    // associations can be defined here
    Horario.hasMany(models.Programacion, {
      foreignKey: 'horarioId'
    })
  };
  return Horario;
};