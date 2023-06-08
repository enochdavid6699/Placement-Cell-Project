const Student = require('../models/student');
const Interview = require('../models/interview');
const Employee = require('../models/employee');

module.exports.home = async function (req, res) {

  try {

    let students = await Student.find({})
      .sort('-createdAt')
      .populate()

    let interviews = await Interview.find({})
    .sort('-createdAt')
    .populate()

    let employee = await Employee.findById(req.user._id);

    return res.render('home', {
      title: "Home",
      students: students,
      interviews: interviews,
      employee: employee
    });

  } catch (error) {
    console.log('Error', err);
    return;
  }
}