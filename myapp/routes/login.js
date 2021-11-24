var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');



router.get('/', loginController.login);
router.post('/', loginController.login)
//router.get('/logout', usersController.logout)




module.exports = router; 