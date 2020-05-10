const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/index.route');

router.get('/', indexControllers.index);

module.exports = router;