'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuarios', {
    usuario: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};