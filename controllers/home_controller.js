//Require Student, Interview, Employee
const Student = require('../models/student');
const Interview = require('../models/interview');
const Employee = require('../models/employee');


//Render the Home Page
module.exports.home = async function (req, res) {

  try {

    //Get all Students and populate them
    let allStudents = await Student.find({})
      .sort('-createdAt')
      .populate()
      .populate('interviews')

    //Get all Interviews and populate them
    let interviews = await Interview.find({})
      .sort('-createdAt')
      .populate()
      .populate('students')

    //Get the Employee who is logged in
    let employee = await Employee.findById(req.user._id);

    return res.render('home', {
      title: "Home",
      allStudents: allStudents,
      interviews: interviews,
      employee: employee
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}