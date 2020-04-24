"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/api/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.use((0, _cors["default"])());
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../out')));
app.use('/', _index["default"]);
app.get('/', function (req, res) {
  res.sendFile(_path["default"].resolve(__dirname, '../out', 'index.html'));
}); // require('./routes/api/index.js')(app);

app.get('/*', function (req, res) {
  res.status(404).send('404 Not Found');
});
app.listen(PORT, function () {
  console.error("listening on port ".concat(PORT));
});