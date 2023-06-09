const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeesController = require('../controllers/students_controller');

//Student Creation Page
router.get('/create-student-page' , passport.checkAuthentication , employeesController.createStudentPage);
//Student Creation Method
router.post('/create-student' , passport.checkAuthentication , employeesController.createStudent);
//Student Deletion Method
router.get('/delete-student/:id' , passport.checkAuthentication , employeesController.deleteStudent);
//Download Student Detials
router.get('/download' , passport.checkAuthentication , employeesController.download);
//Student Update Page
router.get('/update-page/:id' , passport.checkAuthentication , employeesController.updatePage);
//Update Student Details
router.post('/update' , passport.checkAuthentication , employeesController.update);

module.exports = router;