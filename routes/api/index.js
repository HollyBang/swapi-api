// const peopleRoute = require('./peopleRoute.js');
// const planetsRoute = require('./planetsRoute.js');
// const filmsRoute = require('./filmsRoute.js');
// const speciesRoute = require('./speciesRoute.js');
// const starshipsRoute = require('./starshipsRoute.js');
// const vehiclesRoute = require('./vehiclesRoute.js');

// module.exports = (app) => {
//   app.use('/api', peopleRoute);
//   app.use('/api', planetsRoute);
//   app.use('/api', filmsRoute);
//   app.use('/api', speciesRoute);
//   app.use('/api', starshipsRoute);
//   app.use('/api', vehiclesRoute);
// }
import express from 'express';
const router = express.Router();
import filmsRoute from './filmsRoute.js';
router.use('/api', filmsRoute)
export default router;