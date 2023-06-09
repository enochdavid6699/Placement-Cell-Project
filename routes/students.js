//Require Express
const express = require('express');

//Require Router
const router = express.Router();

//Require Passport
const passport = require('passport');

//Require Students Controller
const studentsController = require('../controllers/students_controller');

//Student Creation Page
router.get('/create-student-page' , passport.checkAuthentication , studentsController.createStudentPage);
//Student Creation Method
router.post('/create-student' , passport.checkAuthentication , studentsController.createStudent);
//Student Deletion Method
router.get('/delete-student/:id' , passport.checkAuthentication , studentsController.deleteStudent);
//Download Student Detials
router.get('/download' , passport.checkAuthentication , studentsController.download);
//Student Update Page
router.get('/update-page/:id' , passport.checkAuthentication , studentsController.updatePage);
//Update Student Details
router.post('/update' , passport.checkAuthentication , studentsController.update);

//Export Router
module.exports = router;