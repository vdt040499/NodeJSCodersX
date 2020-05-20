const express = require('express');
const router = express.Router();
const multer = require('multer');

const productControllers = require('../controllers/product.controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

const upload = multer({ storage: storage });

router.get('/', productControllers.index);
router.get('/create', productControllers.create);
router.post('/postcreate', upload.single('image'), productControllers.postCreate);

module.exports = router;