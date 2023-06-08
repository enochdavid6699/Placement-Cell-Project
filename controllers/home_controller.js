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

    let employees = await Employee.find({})

    return res.render('home', {
      title: "Home",
      students: students,
      interviews: interviews,
      employees: employees
    });

  } catch (error) {
    console.log('Error', err);
    return;
  }
}