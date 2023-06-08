const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeesController = require('../controllers/employees_controller');

router.get('/sign-up', employeesController.signUp);
router.get('/sign-in', employeesController.signIn);

router.post('/create' , employeesController.create);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/employees/sign-in'},
), employeesController.createSession);

router.get('/sign-out' , employeesController.signOut);

module.exports = router;