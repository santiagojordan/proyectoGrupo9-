var express = require('express');
var router = express.Router();
const controller = require('../controllers/resultadoBusquedaController');



router.get('/index', controller.index);
//router.get('/id/:id', controller.show);




module.exports = router;