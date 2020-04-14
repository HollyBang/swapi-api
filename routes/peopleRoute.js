const express = require('express');
const router = express.Router();

const people = require('../starData/newPeople.js');


router.get('/people', (req, res) => {
  res.send(people);
})

router.get('/people/:id', (req, res) => {
  const id  = Number(req.params.id);
  const human = people.find(human => human.id === id);

  if(!human) {
    res.status(404).send('Human not found');
  } else {
    res.status(200).send(human);
  }
})

module.exports = router;