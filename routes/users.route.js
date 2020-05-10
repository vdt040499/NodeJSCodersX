const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users.controller');

router.get('/', userControllers.index);
router.get('/search', userControllers.search);
router.get('/create', userControllers.create);
router.get('/:id', userControllers.getuser);
router.post('/create', userControllers.createpost);


module.exports = router;