//Require Mongoose
const mongoose = require('mongoose');

//Create Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    placed: {
        type: String,
        enum: ['Placed', 'Not Placed'],
        default: 'Not Placed',
        required: true
    },
    DSA: {
        type: Number,
        required: true
    },
    webDev: {
        type: Number,
        required: true
    },
    react: {
        type: Number,
        required: true
    },
    result: {
        type: String,
        enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'],
        default: 'On Hold'
    },
    //Include the Array of Ids of all the Interviews of a Student
    interviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Interview'
        }   
    ]
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

//Export Student
module.exports = Student;