const Student = require('../models/student');

module.exports.home = async function (req, res) {

  try {

    let students = await Student.find({})
      .sort('-createdAt')
      .populate()

    return res.render('home', {
      title: "Home",
      students: students
    });

  } catch (error) {
    console.log('Error', err);
    return;
  }
}