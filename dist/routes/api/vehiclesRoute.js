"use strict";

var _index = require("../../controllers/apiControllers/index.js");

var express = require('express');

var router = express.Router();
router.get('/vehicles', _index.mainController);
router.get('/vehicles/:id', _index.getIdController);
module.exports = router;