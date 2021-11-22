var express = require('express');
var router = express.Router();
const controller = require('../controllers/loginController');


router.get('/index', controller.index);
router.post('/index', controller.login);
router.post('/logout', controller.logout);



module.exports = router; 