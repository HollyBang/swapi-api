import express from 'express';
const router = express.Router();

import { mainController, getIdController  } from '../../controllers/apiControllers/index.js';


router.get('/films', mainController);
router.get('/films/:id', getIdController);

export default router;