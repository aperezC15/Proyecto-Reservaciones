'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venta = sequelize.define('Ventas', {
    fecha: DataTypes.DATE,
    precio: DataTypes.FLOAT,
    // programacionId: DataTypes.INTEGER,
    // asientoId: DataTypes.INTEGER,
    // personaId: DataTypes.INTEGER,
    // usuarioId: DataTypes.INTEGER,
    // registroTemperaturaId: DataTypes.INTEGER
  }, {});
  Venta.associate = function(models) {
    // associations can be defined here
    Venta.belongsTo(models.Programacion, {
      foreignKey: 'programacionId'
    })
    Venta.belongsTo(models.Asientos, {
      foreignKey: 'asientoId'
    })
    Venta.belongsTo(models.Personas, {
      foreignKey: 'personaId'
    })
    Venta.belongsTo(models.Usuarios, {
      foreignKey: 'usuarioId'
    })
    Venta.belongsTo(models.RegistrosTemperatura, {
      foreignKey: 'registroTemperaturaId'
    })
  };
  return Venta;
};