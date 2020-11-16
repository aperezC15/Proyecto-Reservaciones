'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pelicula = sequelize.define('Peliculas', {
    titulo: DataTypes.STRING,
    duracionEnMinutos: DataTypes.INTEGER,
    generoId: DataTypes.INTEGER
  }, {
    
  });
  Pelicula.associate = function(models) {
    // associations can be defined here
    Pelicula.belongsTo(models.Generos, {
      foreignKey: 'generoId'
    })

    Pelicula.hasMany(models.Programacion, {
      foreignKey: 'peliculaId'
    })
  };
  return Pelicula;
};