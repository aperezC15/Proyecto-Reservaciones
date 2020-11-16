'use strict';
module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Personas', {
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    dpi: DataTypes.STRING
  }, {});
  Persona.associate = function(models) {
    // associations can be defined here
  };
  return Persona;
};