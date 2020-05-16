const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: './public/uploads/'});

const authControllers = require('../controllers/auth.controller');

router.get('/login', authControllers.login);
router.post('/login', authControllers.postLogin);
router.get('/signup', authControllers.signup);
router.post('/signup', upload.single('avatar'), authControllers.postSignup);

module.exports = router;