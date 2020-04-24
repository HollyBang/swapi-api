/** Express router providing user related routes
 * @module routers/planets
 * @requires express
 */

/**
 * express module
 * @const
 */
import express from 'express';

/**
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 * @namespace planetsRouter
 */
const router = express.Router();

import { mainController, getIdController  } from '../../controllers/apiControllers/index.js';

/**
 * Route serving planets get.
 * @name get/planets
 * @function
 * @memberof module:routers/planets~planetsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/planets', mainController)

router.get('/planets/:id', getIdController)

module.exports = router;