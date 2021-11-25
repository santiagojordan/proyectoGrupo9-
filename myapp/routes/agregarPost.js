var express = require('express');
const detalleController = require('../controllers/detalleController');
var router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/posteos')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

router.get('/modificar/:id', posteosController.vistaModificarPosteo);

router.post('/modificar/:id', upload.single('nuevaImagen'), posteosController.modificarPosteo);
router.post('/eliminar/:id', posteosController.eliminarPosteo);