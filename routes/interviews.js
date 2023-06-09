const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeesController = require('../controllers/interviews_controller');

//Create Interview Page
router.get('/create-interview-page' ,passport.checkAuthentication , employeesController.createInterviewPage);
//Interview Creation Method
router.post('/create-interview' , passport.checkAuthentication , employeesController.createInterview);
//Interview Deletion Method
router.get('/delete-interview/:id' , passport.checkAuthentication , employeesController.deleteInterview);
//Adding Student to Interview
router.post('/add-student' , passport.checkAuthentication , employeesController.addStudentToInterview);
//Removing Student From Interview
router.get('/remove-student-from-interview/:studentId/:interviewId' , passport.checkAuthentication , employeesController.removeStudentFromInterview);

module.exports = router;