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
    college: {
        type: String,
        required: true
    },
    placed: {
        type: Boolean,
        required: true,
        default: false
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
    company: {
        type: String
    },
    date: {
        type: String
    },
    result: {
        type: String,
        enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'],
        default: 'On Hold'
    }
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;