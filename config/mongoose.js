//Require Mongoose
const mongoose = require('mongoose');

//Connect Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Placement_Cell');

//Store the connect in a variable
const db = mongoose.connection;

//On Error
db.on('error' , console.error.bind( console , 'error in connecting to db' ));

//On Success
db.once('open' , function(){
    console.log('Successfully connected to the Data Base');
});