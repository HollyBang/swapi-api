const express = require('express');
const router = express.Router();

const species = require('../starData/newSpecies.js');

router.get('/species', (req, res) => {
  res.send(species);
})

router.get('/species/:id', (req, res) => {
  const id  = Number(req.params.id);
  const space = species.find(space => space.id === id);

  if(!space) {
    res.status(404).send('space not found');
  } else {
    res.status(200).send(space);
  }
})

module.exports = router;