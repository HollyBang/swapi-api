const express = require('express');
const router = express.Router();

const starships = require('../../starData/newStarships.js');

router.get('/starships', (req, res) => {
  res.send(starships);
})

router.get('/starships/:id', (req, res) => {
  const id  = Number(req.params.id);
  const starship = starships.find(starship => starship.id === id);

  if(!starship) {
    res.status(404).send('starship not found');
  } else {
    res.status(200).send(starship);
  }
})

module.exports = router;