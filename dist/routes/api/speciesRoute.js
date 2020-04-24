"use strict";

var _index = require("../../controllers/apiControllers/index.js");

var express = require('express');

var router = express.Router();
router.get('/species', _index.mainController);
router.get('/species/:id', _index.getIdController);
module.exports = router;