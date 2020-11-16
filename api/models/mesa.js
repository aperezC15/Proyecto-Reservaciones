'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mesa = sequelize.define('Mesa', {
    numeroAsignado: DataTypes.INTEGER,
    valida: DataTypes.BOOLEAN
  }, {});
  Mesa.associate = function(models) {
    // associations can be defined here
  };
  return Mesa;
};