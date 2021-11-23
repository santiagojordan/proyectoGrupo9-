var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
var registracionController = require('../controllers/registracionController');


router.get('/login', usersController.mostrarLogin);
router.post('/login', usersController.autenticarUsuario)
router.get('/logout', usersController.logout)




module.exports = router; 