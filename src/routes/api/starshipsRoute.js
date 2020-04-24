const express = require('express');
const router = express.Router();

import { mainController, getIdController  } from '../../controllers/apiControllers/index.js';

router.get('/starships', mainController)

router.get('/starships/:id', getIdController)

module.exports = router;