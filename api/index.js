const ventas = require('./routes/ventas');
const salas = require('./routes/salas');
const peliculas = require('./routes/peliculas');
const express = require('express');
const app = express();
const port = process.env.NODE_ENV || 3000;

app.use(express.json());
app.use('/ventas', ventas);
app.use('/salas', salas);
app.use('/peliculas', peliculas);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`App running on port ${port}`))