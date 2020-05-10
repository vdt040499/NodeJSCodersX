const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users.controller');

router.get('/', userControllers.index);

module.exports = router;