const Pelicula = require('../models/index').Peliculas;
const express = require('express');
const { route } = require('./salas');
const router = express.Router();

router.post('/', async (req, res) => {
  const { titulo, duracionEnMinutos, generoId } = req.body;
  try {
    const pelicula = await Pelicula.create({
      titulo, duracionEnMinutos, generoId
    });
    
    return res.json(pelicula);
  } catch (error) {
    console.log('error', error)
    res.send()
  }
})

module.exports = router;