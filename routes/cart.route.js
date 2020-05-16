const express = require('express');
const router = express.Router();

const cartControllers = require('../controllers/cart.controller');

router.get('/add/:productId', cartControllers.addToCart);

module.exports = router;