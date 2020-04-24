import express from 'express';
const apiRouter = express.Router();


import peopleRoute from './peopleRoute.js';
import planetsRoute from './planetsRoute.js';
import filmsRoute from './filmsRoute';
import speciesRoute from './speciesRoute.js';
import starshipsRoute from './starshipsRoute.js';
import vehiclesRoute from './vehiclesRoute.js';


apiRouter.use('/api', peopleRoute);
apiRouter.use('/api', planetsRoute);
apiRouter.use('/api', filmsRoute);
apiRouter.use('/api', speciesRoute);
apiRouter.use('/api', starshipsRoute);
apiRouter.use('/api', vehiclesRoute);

export default apiRouter;