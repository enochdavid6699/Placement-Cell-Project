const Student = require('../models/student');
const Interview = require('../models/interview')

module.exports.home = async function (req, res) {

  try {

    let students = await Student.find({})
      .sort('-createdAt')
      .populate()

    let interviews = await Interview.find({})
    .sort('-createdAt')
    .populate()

    return res.render('home', {
      title: "Home",
      students: students,
      interviews: interviews
    });

  } catch (error) {
    console.log('Error', err);
    return;
  }
}