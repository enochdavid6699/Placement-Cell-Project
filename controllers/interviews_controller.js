//Require Student
const Interview = require('../models/interview');

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
module.exports.deleteInterview = async function (rerq, res) {

    try {
        let interview = await Interview.findById(req.body._id);

        if(interview){
            await Interview.findByIdAndDelete(req.body._id);
        }

        return res.redirect('/');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}