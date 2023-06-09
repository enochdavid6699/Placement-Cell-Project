//Require Express
const express = require('express');

//Require Router
const router = express.Router();

//Require Passport
const passport = require('passport');

//Require Interview Router
const interviewsController = require('../controllers/interviews_controller');

//Create Interview Page
router.get('/create-interview-page' ,passport.checkAuthentication , interviewsController.createInterviewPage);
//Interview Creation Method
router.post('/create-interview' , passport.checkAuthentication , interviewsController.createInterview);
//Interview Deletion Method
router.get('/delete-interview/:id' , passport.checkAuthentication , interviewsController.deleteInterview);
//Adding Student to Interview
router.post('/add-student' , passport.checkAuthentication , interviewsController.addStudentToInterview);
//Removing Student From Interview
router.get('/remove-student-from-interview/:studentId/:interviewId' , passport.checkAuthentication , interviewsController.removeStudentFromInterview);

//Export Router
module.exports = router;