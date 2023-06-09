//Require Mongoose
const mongoose = require('mongoose');

//Create Schema
const interviewSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    job:{
        type: String,
        required: true
    },
    //Include the Array of Ids of all the sudents of an Interview
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    ]
}, {
    timestamps: true
});

const Interview = mongoose.model('Interview', interviewSchema);

//Export Interview
module.exports = Interview;