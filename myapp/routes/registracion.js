var express = require('express');
var router = express.Router();
var registracionController = require('../controllers/registracionController');


router.post('/registracion', registracionController.registrar)
router.get('/registracion', registracionController.registracion)



module.exports = router;