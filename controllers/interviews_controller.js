//Require Interview
const Interview = require('../models/interview');

//Require Student
const Student = require('../models/student');

//Create Student Page
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
        let interview = await Interview.findById(req.body._id);

        if (interview) {
            await Interview.findByIdAndDelete(req.body._id);
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