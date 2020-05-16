const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users.controller');
const validate = require('../validate/user.validate');

router.get('/', userControllers.index);
router.get('/search', userControllers.search);
router.get('/create', userControllers.create);
router.get('/:id', userControllers.getuser);
router.post('/create',validate.postCreate, userControllers.createpost);

module.exports = router;