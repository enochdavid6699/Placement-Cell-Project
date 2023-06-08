
const Employee = require('../models/employee');

//Sign Up
module.exports.signUp = function (req, res) {

    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('employee_sign_up', {
        title: "Sign Up"
    });
}

//Sign In
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
    if (req.body.password != req.body.confirm_password){
        // req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }
    try {

        let employee = await Employee.findOne({email: req.body.email});
            // if(err){req.flash('error', err); return}
    
            if (!employee){
                await Employee.create(req.body);
                    // if(err){req.flash('error', err); return}
    
                    return res.redirect('/employees/sign-in');
                
            }else{
                // req.flash('success', 'You have signed up, login to continue!');
                return res.redirect('back');
            }
        
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
}

//Sign Out Function
module.exports.signOut = function(req , res){
    req.logout(function(err) {

        // Redirect the user to the login page after logout
        return res.redirect('/');
    });
}