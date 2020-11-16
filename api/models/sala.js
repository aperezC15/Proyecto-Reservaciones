'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sala = sequelize.define('Salas', {
    codigo: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN
  }, {});
  Sala.associate = function(models) {
    // associations can be defined here
    Sala.hasMany(models.Asientos, {
      foreignKey: 'salaId'
    });

    Sala.hasMany(models.Programacion, {
      foreignKey: 'salaId'
    })
  };
  return Sala;
};