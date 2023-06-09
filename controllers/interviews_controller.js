//Require Interview
const Interview = require('../models/interview');

//Require Student
const Student = require('../models/student');

//Create Interview Page
module.exports.createInterviewPage = function (req, res) {

    return res.render('add_new_interview', {
        title: "Add New Interview"
    });
}

//Create Interview
module.exports.createInterview = async function (req, res) {

    try {
        let interview = await Interview.create(req.body);
        await interview.save();

        //TODO
        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Delete Interview
module.exports.deleteInterview = async function (req, res) {

    try {
        let interview = await Interview.findById(req.params.id);

        if (interview) {
            await Interview.findByIdAndDelete(req.params.id);
        }

        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//Adding Student to Interview
module.exports.addStudentToInterview = async function (req, res) {

    try {

        //Adding Student to Interview
        let interview = await Interview.findById(req.body.interview);

        //Checking if already added
        if (interview.students.includes(req.body.student)) {
            return res.redirect('/');
        }

        interview.students.push(req.body.student);
        await interview.save();

        //AddingInterview to Student
        let student = await Student.findById(req.body.student);
        student.interviews.push(req.body.interview);
        await student.save();

        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Removing Student from interview
module.exports.removeStudentFromInterview = async function (req, res) {
    const { studentId, interviewId } = req.params;
  
    try {
      const interview = await Interview.findById(interviewId);
      const student = await Student.findById(studentId);
  
      if (interview && student) {
        interview.students.pull(studentId);
        student.interviews.pull(interviewId);
  
        await Promise.all([interview.save(), student.save()]);
  
        return res.redirect('back');
      }
    } catch (err) {
      console.error(err);
    }
  };
  