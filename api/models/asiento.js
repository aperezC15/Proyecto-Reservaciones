'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asiento = sequelize.define('Asientos', {
    codigo: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN,
    salaId: DataTypes.INTEGER
  }, {});
  Asiento.associate = function(models) {
    // associations can be defined here
    Asiento.belongsTo(models.Salas, {
      foreignKey: 'salaId'
    })
    Asiento.hasMany(models.Ventas, {
      foreignKey: 'asientoId'
    })
  };
  return Asiento;
};