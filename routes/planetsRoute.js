const express = require('express');
const router = express.Router();

const planets = require('../starData/newPlanets.js');

router.get('/planets', (req, res) => {
  res.send(planets);
})

router.get('/planets/:id', (req, res) => {
  const id  = Number(req.params.id);
  const planet = planets.find(planet => planet.id === id);

  if(!planet) {
    res.status(404).send('Planet not found');
  } else {
    res.status(200).send(planet);
  }
})

module.exports = router;