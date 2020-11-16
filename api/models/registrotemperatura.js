'use strict';
module.exports = (sequelize, DataTypes) => {
  const RegistroTemperatura = sequelize.define('RegistrosTemperatura', {
    gradosCent: DataTypes.FLOAT
  }, {});
  RegistroTemperatura.associate = function(models) {
    // associations can be defined here
  };
  return RegistroTemperatura;
};