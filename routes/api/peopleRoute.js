/** Express router providing user related routes
 * @module routers/people
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
 * @namespace peopleRouter
 */
const router = express.Router();

const people = require('../../starData/newPeople.js');

/**
 * Route serving get all people.
 * @name get/people
 * @function
 * @example 
 * use smt like this
 * fetch('https://swapiapi.herokuapp.com/api/people')
 * @see https://swapiapi.herokuapp.com/api/people
 * @memberof module:routers/people~peopleRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/people', (req, res) => {
  res.send(people);
})


/**
 * Route serving get one human.
 * @name get/people:id
 * @function
 * @example 
 * use smt like this
 * fetch('https://swapiapi.herokuapp.com/api/people/1')
 * @see https://swapiapi.herokuapp.com/api/people/1
 * @memberof module:routers/people~peopleRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
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