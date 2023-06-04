const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true
    },
    studentDetails: {
        college: {
            type: String,
            required: true
        },
        placed: {
            type: Boolean,
            required: true
        }
    },
    courseScore: {
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
    },
    interviews: {
        company: {
            type: String
        },
        date: {
            type: String
        }
    },
    result: {
        type: String,
        enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'],
        required: true
    }
},{
    timestamps: true
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;