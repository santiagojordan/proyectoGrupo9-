let express = require('express');
let router = express.Router();
const multer = require('multer');
const path = require('path')
const controller = require('../controllers/registracionController');


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/portadas')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});
let upload = multer({ storage: storage })



router.get('/index', controller.index);
router.post('/index', upload.single('portada'), controller.createUser);
router.post('/registracion', upload.single('portada'), controller.store)




module.exports = router;