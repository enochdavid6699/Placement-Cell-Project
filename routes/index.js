const express = require('express');
const router = express.Router();
module.exports=router;

const homeController = require('../controllers/home_controller');

router.get('/' , homeController.home);

router.use('/employees' , require('./employees'));

router.use('/students' , require('./students'));

router.use('/interviews' , require('./interviews'));