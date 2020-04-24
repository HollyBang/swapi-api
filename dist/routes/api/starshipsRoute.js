"use strict";

var _index = require("../../controllers/apiControllers/index.js");

var express = require('express');

var router = express.Router();
router.get('/starships', _index.mainController);
router.get('/starships/:id', _index.getIdController);
module.exports = router;