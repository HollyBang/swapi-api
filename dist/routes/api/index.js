"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _peopleRoute = _interopRequireDefault(require("./peopleRoute.js"));

var _planetsRoute = _interopRequireDefault(require("./planetsRoute.js"));

var _filmsRoute = _interopRequireDefault(require("./filmsRoute"));

var _speciesRoute = _interopRequireDefault(require("./speciesRoute.js"));

var _starshipsRoute = _interopRequireDefault(require("./starshipsRoute.js"));

var _vehiclesRoute = _interopRequireDefault(require("./vehiclesRoute.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRouter = _express["default"].Router();

apiRouter.use('/api', _peopleRoute["default"]);
apiRouter.use('/api', _planetsRoute["default"]);
apiRouter.use('/api', _filmsRoute["default"]);
apiRouter.use('/api', _speciesRoute["default"]);
apiRouter.use('/api', _starshipsRoute["default"]);
apiRouter.use('/api', _vehiclesRoute["default"]);
var _default = apiRouter;
exports["default"] = _default;