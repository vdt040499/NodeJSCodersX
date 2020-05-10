const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users.controller');

router.get('/', userControllers.index);
router.get('/search', userControllers.search);

module.exports = router;