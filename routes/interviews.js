const express = require('express');
const router = express.Router();

const employeesController = require('../controllers/interviews_controller');

//Create Interview Page
router.get('/create-interview-page' , employeesController.createInterviewPage);
//Interview Creation Method
router.post('/create-interview' , employeesController.createInterview);
//Interview Deletion Method
router.get('/delete-interview' , employeesController.deleteInterview);

module.exports = router;