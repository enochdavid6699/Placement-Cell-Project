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

//Update Page Student
module.exports.updatePage = async function (req, res) {

    let student = await Student.findById(req.params.id);

    student.populate();

    return res.render('update_student', {
        title: "Update Student",
        student: student
    });
}

//Update Student
module.exports.update = async function (req, res) {
   
    let student = await Student.findByIdAndUpdate(req.body.student_id , req.body);

    return res.redirect('/');
}

//Delete Student
module.exports.deleteStudent = async function (req, res) {

    try {
        let student = await Student.findById(req.params.id);

        if (student) {
            await Student.findByIdAndDelete(req.params.id);
        }

        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//Download Student Details
module.exports.download = async function(req , res){
    //TODO
    console.log("CSV Download")
    return res.redirect('/');
}