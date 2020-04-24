"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIdController = exports.mainController = void 0;

var _newPeople = _interopRequireDefault(require("../../starData/newPeople"));

var _newFilms = _interopRequireDefault(require("../../starData/newFilms"));

var _newPlanets = _interopRequireDefault(require("../../starData/newPlanets"));

var _newStarships = _interopRequireDefault(require("../../starData/newStarships"));

var _newVehicles = _interopRequireDefault(require("../../starData/newVehicles"));

var _newSpecies = _interopRequireDefault(require("../../starData/newSpecies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var dataConfig = {
  people: _newPeople["default"],
  films: _newFilms["default"],
  planets: _newPlanets["default"],
  starships: _newStarships["default"],
  vehicles: _newVehicles["default"],
  species: _newSpecies["default"]
};

var getRouteName = function getRouteName(routePath) {
  return routePath.split('/')[1];
};

var mainController = function mainController(req, res) {
  var routeName = getRouteName(req.path);
  var count = Number(req.query.count);
  var page = Number(req.query.page);

  if (count) {
    res.send(dataConfig[routeName].slice(0, count));
    return;
  }

  if (page) {
    var pageCount = Math.ceil(dataConfig[routeName].length / 9);
    if (page > pageCount) page = (_readOnlyError("page"), pageCount);
    res.send({
      page: page,
      pageCount: pageCount,
      data: dataConfig[routeName].slice(dataConfig[routeName].slice(page * 9 - 9, page * 9))
    });
    return;
  }

  res.send(dataConfig[routeName]);
};

exports.mainController = mainController;

var getIdController = function getIdController(req, res) {
  var routeName = getRouteName(req.path);
  var ids = req.params.id.split(',').map(Number);
  var data = dataConfig[routeName].filter(function (dataItem) {
    if (ids.indexOf(dataItem.id) !== -1) return true;
  });

  if (data.length > 0) {
    res.status(200).send(data);
  } else {
    res.status(404).send('Data not found');
  }
};

exports.getIdController = getIdController;