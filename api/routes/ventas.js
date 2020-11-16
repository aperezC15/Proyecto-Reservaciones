const express = require('express');
const Ventas = require('../models/index').Ventas;
const Programacion = require('../models/index').Programacion;
const Asientos = require('../models/index').Asientos;
const { Op } = require('../models/index').sequelize;
const { route } = require('./salas');
const router = express.Router();

router.post('/', async (req, res) => {
  // const { fecha, precio, programacionId, persona, temperatura } = req.body;
  const { programacionId } = req.body;
  
  // obtener listado de asientos disponibles
  const programacion = await Programacion.findByPk(programacionId);
  console.log('programacion: ', programacion);

  let asientosOcupados = await Ventas.findAll({
    include: [
      {
        association: 'Programacion', 
        where: {
          salaId: programacion.salaId
        }
      }
    ],
    attributes: ['asientoId']
  })

  asientosOcupados = asientosOcupados.map(a => a.asientoId);
  console.log('asientosOcupados: ', asientosOcupados);

  const asientosLibres = await Asientos.findAll({
    where: {
      [Op.and]: [
        {salaId: programacionId.salaId},
        {disponible: true},
        {id: {
          [Op.notIn]: asientosOcupados
        }}
      ]
    }
  })
  console.log('asientosLibres: ', asientosLibres)
  // si el listado da 0, retornar error
  // obtener un numero aleatorio del array

  // si persona no tiene id crear persona

  // insertar temperatura

  // insertar venta
  return res.send()
})

module.exports = router;