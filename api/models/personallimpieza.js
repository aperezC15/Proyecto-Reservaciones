'use strict';
module.exports = (sequelize, DataTypes) => {
  const PersonalLimpieza = sequelize.define('PersonalLimpieza', {
    personaId: DataTypes.INTEGER,
    horarioId: DataTypes.INTEGER
  }, {});
  PersonalLimpieza.associate = function(models) {
    // associations can be defined here
  };
  return PersonalLimpieza;
};