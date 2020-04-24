import express from 'express';
const router = express.Router();

import films from '../../starData/newFilms.js';


router.get('/films', (req, res) => {
  res.send(films);
})

router.get('/films/:id', (req, res) => {
  const id  = Number(req.params.id);
  const film = films.find(film => film.id === id);

  if(!film) {
    res.status(404).send('film not found');
  } else {
    res.status(200).send(film);
  }
})

export default router;