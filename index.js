const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static(path.resolve(__dirname, 'out')));

app.get('/', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'out', 'index.html'));
});

require('./routes/api/index.js')(app);

app.get('/*', (req, res) => {
  res.status(404).send('404 Not Found');
})

app.listen(PORT, () => {
  console.error(`listening on port ${PORT}`);
});