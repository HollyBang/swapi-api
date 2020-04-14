const express = require('express');
const router = express.Router();

const vehicles = require('../starData/newVehicles.js');


router.get('/vehicles', (req, res) => {
  res.send(vehicles);
})

router.get('/vehicles/:id', (req, res) => {
  const id  = Number(req.params.id);
  const vehicle = vehicles.find(vehicle => vehicle.id === id);

  if(!vehicle) {
    res.status(404).send('vehicle not found');
  } else {
    res.status(200).send(vehicle);
  }
})

module.exports = router;