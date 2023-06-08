const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/students_controller');

//Student Creation Page
router.get('/create-student-page' , employeesController.createStudentPage);
//Student Creation Method
router.post('/create-student' , employeesController.createStudent);
//Student Deletion Method
router.get('/delete-student' , employeesController.deleteStudent);

module.exports = router;