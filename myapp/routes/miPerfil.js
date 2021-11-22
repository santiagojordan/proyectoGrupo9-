var express = require('express');
var router = express.Router();
const controller = require('../controllers/miPerfilController')


router.get('/index', controller.index);
router.get('/edit', controller.edit);


module.exports = router;
