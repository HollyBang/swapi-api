/** Express router providing user related routes
 * @module routers/people
 * @requires express
 */
// (req, res) => {
  
//   filmsData.forEach((item)=> {
//     const name = item.episode_id;
//     item.image = `https://swapiapi.herokuapp.com/api/images/films/${name}.jpg`;
//   })

//   res.send(filmsData);
// }
/**
 * express module
 * @const
 */
import express from 'express';


/**
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 * @namespace peopleRouter
 */
const router = express.Router();

import { mainController, getIdController  } from '../../controllers/apiControllers/index.js';

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
router.get('/people', mainController);



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
router.get('/people/:id', getIdController);

module.exports = router;