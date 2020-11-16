const Salas = require('../models/index').Salas
const Programacion = require('../models/index').Programacion
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const salas = await Salas.findAll({
    attributes: ['id', 'codigo'],
    where: {
      disponible: true
    }
  })
  return res.json(salas)
})

router.get('/:id/programacion', async (req, res) => {
  const { id } = req.params;

  const programaciones = await Programacion.findAll({
    where: {
      salaId: id
    },
    include: [
      {association: 'Pelicula', attributes: ['titulo']},
      {association: 'Horario', attributes: ['descripcion']},
      {association: 'Sala', attributes: ['codigo']}
    ],
    attributes: ['id', 'fecha', 'precio']
  })
  return res.json(programaciones)
})

module.exports = router;