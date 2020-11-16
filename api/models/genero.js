'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define('Generos', {
    nombre: DataTypes.STRING
  }, {
    
  });
  Genero.associate = function(models) {
    // associations can be defined here
    Genero.hasMany(models.Peliculas, {
      foreignKey: 'generoId'
    })
  };
  return Genero;
};