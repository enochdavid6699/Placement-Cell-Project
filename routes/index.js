const express = require('express');
const router = express.Router();
const passport = require('passport');

const homeController = require('../controllers/home_controller');

router.get('/' , passport.checkAuthentication, homeController.home);

router.use('/employees' , require('./employees'));

router.use('/students' , require('./students'));

router.use('/interviews' , require('./interviews'));

module.exports=router;