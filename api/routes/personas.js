const Personas = require('../models/index').Personas;
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { dpi } = req.body;

  const persona = await Personas.findOne({
    where: {
      dpi
    }
  })

  return res.json(persona);
})

module.exports = router;