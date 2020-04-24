const express = require('express');
const router = express.Router();

import { mainController, getIdController  } from '../../controllers/apiControllers/index.js';


router.get('/vehicles', mainController)

router.get('/vehicles/:id', getIdController)

module.exports = router;