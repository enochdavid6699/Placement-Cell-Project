//Require Mongoose
const mongoose = require('mongoose');

//Create Schema
const employeeSchema = new mongoose.Schema({    
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        }
});

const Employee = mongoose.model('Employee' , employeeSchema);

//Export Employee
module.exports = Employee;