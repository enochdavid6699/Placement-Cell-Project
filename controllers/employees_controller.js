
const Employee = require('../models/employee');

//Sign Up Page
module.exports.signUp = function (req, res) {

    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('employee_sign_up', {
        title: "Sign Up"
    });
}

//Sign In Page
module.exports.signIn = function (req, res) {

    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('employee_sign_in', {
        title: "Sign In"
    });
}

//Get the sign up data
module.exports.create =async function(req, res){

    //Check if both Passwords are same
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    try {

        //Find the Employee
        let employee = await Employee.findOne({email: req.body.email});
    
            if (!employee){
                await Employee.create(req.body);
                return res.redirect('/employees/sign-in');
                
            }else{
                return res.redirect('back');
            }
        
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

//Sign Out Function
module.exports.signOut = function(req , res){
    req.logout(function(err) {

        // Redirect the user to the login page after logout
        return res.redirect('/');
    });
}