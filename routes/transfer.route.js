const express = require('express');
const router = express.Router();

const transferControllers = require('../controllers/transfer.controller');

router.get('/create', transferControllers.create);
router.post('/postcreate', transferControllers.postCreate);

module.exports = router;