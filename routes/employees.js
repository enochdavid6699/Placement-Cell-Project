//Require Express
const express = require('express');

//Require Router
const router = express.Router();

//Require Passport
const passport = require('passport');

//Require Employee Controller
const employeesController = require('../controllers/employees_controller');

//Sign Up Page
router.get('/sign-up', employeesController.signUp);

//Sign In page
router.get('/sign-in', employeesController.signIn);

//Create an Employee
router.post('/create' , employeesController.create);

//Create a Session
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/employees/sign-in'},
), employeesController.createSession);

//Sign Out
router.get('/sign-out' , employeesController.signOut);

//Export Router
module.exports = router;