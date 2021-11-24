var express = require('express');
var router = express.Router();
var registracionController = require('../controllers/registracionController');


router.post('/', registracionController.registrar)
router.get('/', registracionController.registracion)



module.exports = router;