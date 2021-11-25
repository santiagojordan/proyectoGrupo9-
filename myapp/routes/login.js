var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');



router.get('/', loginController.login);
router.get('/', loginController.logout);

router.post('/', loginController.login)
router.post('/', loginController.logout);





module.exports = router; 