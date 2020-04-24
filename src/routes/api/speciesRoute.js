const express = require('express');
const router = express.Router();

import { mainController, getIdController  } from '../../controllers/apiControllers/index.js';

router.get('/species', mainController)

router.get('/species/:id', getIdController)

module.exports = router;