const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

require('./routes/index.js')(app);

app.get('/*', (req, res) => {
  res.status(404).send('404 Not Found');
})

app.listen(PORT, () => {
  console.error(`listening on port ${PORT}`);
});