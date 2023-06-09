//Require Express
const express = require('express');

//Require Router
const router = express.Router();

//Require Passport
const passport = require('passport');

//Require Home Controller
const homeController = require('../controllers/home_controller');

//Render Home Controller
router.get('/' , passport.checkAuthentication, homeController.home);

//Employees Route
router.use('/employees' , require('./employees'));

//Student Route
router.use('/students' , require('./students'));

//Interviews Route
router.use('/interviews' , require('./interviews'));

//Export Router
module.exports=router;