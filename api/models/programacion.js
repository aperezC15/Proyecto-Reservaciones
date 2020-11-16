'use strict';
module.exports = (sequelize, DataTypes) => {
  const Programacion = sequelize.define('Programacion', {
    fecha: DataTypes.DATE,
    precio: DataTypes.FLOAT,
    peliculaId: DataTypes.INTEGER,
    horarioId: DataTypes.INTEGER,
    salaId: DataTypes.INTEGER
  }, {});

  Programacion.associate = function(models) {
    // associations can be defined here
    Programacion.belongsTo(models.Peliculas, {
      foreignKey: 'peliculaId'
    });

    Programacion.belongsTo(models.Horarios, {
      foreignKey: 'horarioId'
    });

    Programacion.belongsTo(models.Salas, {
      foreignKey: 'salaId'
    });
    Programacion.hasMany(models.Ventas, {
      foreignKey: 'programacionId'
    });
  };
  return Programacion;
};