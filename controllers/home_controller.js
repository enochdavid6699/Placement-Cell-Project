const Student = require('../models/student');
const Interview = require('../models/interview');
const Employee = require('../models/employee');

module.exports.home = async function (req, res) {

  try {

    let allStudents = await Student.find({})
      .sort('-createdAt')
      .populate()
      .populate('interviews')

    let interviews = await Interview.find({})
      .sort('-createdAt')
      .populate()
      .populate('students')

    let employee = await Employee.findById(req.user._id);

    return res.render('home', {
      title: "Home",
      allStudents: allStudents,
      interviews: interviews,
      employee: employee
    });

  } catch (error) {
    console.log('Error', error);
    return;
  }
}