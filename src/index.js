import express from 'express';
import path from 'path';
import cors from 'cors';
import apiRouter from './routes/api/index.js';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../out')));
app.use('/api/images', express.static(path.resolve(__dirname, '../assets/images')));
app.use('/', apiRouter);
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../out', 'index.html'));
});


app.get('/*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.error(`listening on port ${PORT}`);
});