//Require Student
const Student = require('../models/student');

//Create Student Page
module.exports.createStudentPage = function (req, res) {

    return res.render('add_new_student', {
        title: "Add New Student"
    });
}

//Create Student
module.exports.createStudent = async function (req, res) {

    try {
        let student = await Student.create(req.body);
        await student.save();

        //TODO
        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Update Student
module.exports.update = function (req, res) {
    Student.findByIdAndUpdate(req.params.id, req.body, function (err, student) {
        return res.redirect('back');
    });
}

//Delete Student
module.exports.deleteStudent = async function (req, res) {

    try {
        let student = await Student.findById(req.body._id);

        if (student) {
            await Student.findByIdAndDelete(req.body._id);
        }

        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}