const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/auth.controller');

router.get('/login', authControllers.login);
router.post('/login', authControllers.postLogin);
router.get('/signup', authControllers.signup);
router.post('/signup', authControllers.postSignup);

module.exports = router;