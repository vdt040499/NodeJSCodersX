const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/product.controller');

router.get('/', productControllers.index);

module.exports = router;