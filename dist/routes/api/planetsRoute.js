"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = require("../../controllers/apiControllers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Express router providing user related routes
 * @module routers/planets
 * @requires express
 */

/**
 * express module
 * @const
 */

/**
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 * @namespace planetsRouter
 */
var router = _express["default"].Router();

/**
 * Route serving planets get.
 * @name get/planets
 * @function
 * @memberof module:routers/planets~planetsRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/planets', _index.mainController);
router.get('/planets/:id', _index.getIdController);
module.exports = router;