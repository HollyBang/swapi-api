"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = require("../../controllers/apiControllers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/films', _index.mainController);
router.get('/films/:id', _index.getIdController);
var _default = router;
exports["default"] = _default;