const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/employees_controller');

router.get('/create-student-page' , employeesController.createStudentPage);
router.post('/create-student' , employeesController.createStudent);

module.exports = router;