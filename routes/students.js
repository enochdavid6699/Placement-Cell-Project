const express = require('express');
const router = express.Router();
const passport = require('passport');

const employeesController = require('../controllers/students_controller');

//Student Creation Page
router.get('/create-student-page' , passport.checkAuthentication, employeesController.createStudentPage);
//Student Creation Method
router.post('/create-student' , passport.checkAuthentication, employeesController.createStudent);
//Student Deletion Method
router.get('/delete-student' , passport.checkAuthentication, employeesController.deleteStudent);

module.exports = router;