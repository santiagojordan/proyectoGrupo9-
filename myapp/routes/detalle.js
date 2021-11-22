var express = require('express');
var router = express.Router();
const detailController = require('../controllers/detalleController');
const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/portadas')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});
let upload = multer({ storage: storage })

/* GET home page. */
router.get('/user/id/:id', detailController.index);
router.get('/add', detailController.add);
router.get('/post/id/:id', detailController.post);
router.post('/add', upload.single("portada"), detailController.create);

module.exports = router;