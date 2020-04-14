/** Express router providing user related routes
 * @module routers/planets
 * @requires express
 */

/**
 * express module
 * @const
 */
const express = require('express');

/**
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 * @namespace planetsRouter
 */
const router = express.Router();

const planets = require('../../starData/newPlanets.js');

/**
 * Route serving planets get.
 * @name get/planets
 * @function
 * @memberof module:routers/planets~planetsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
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