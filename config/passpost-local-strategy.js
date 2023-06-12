//Require all the Dependencies
const { request } = require('express');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Employee = require('../models/employee');

//Authentication Using Passport (New Way)
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    async function(req , email , password , done){
        //Find a user and establish Identity
        let employee = await Employee.findOne({email:email});

        if(!employee || employee.password != password){
            console.log('Invalid Username Password');

            // req.flash('error' , 'Invalid Username/Password');

            return done(null , false);
        }
            return done(null , employee);
        }
));

//Serializing the user to decide which key to be kept in the cookies
passport.serializeUser(function(employee , done){
    done(null , employee.id);
});


//De-serializing th user from key in the cookies (New Way)
passport.deserializeUser(async function(id , done){
    let employee = await Employee.findById(id);     
    done(null , employee);
});

//Check if the user is Authenticated
passport.checkAuthentication = function(req , res , next){

    //If user is signed in then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }

    //If user is not signed in 
    return res.redirect('/employees/sign-in');
}

passport.setAuthenticatedUser = function(req , res , next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.employee = req.employee;
    }
    next();
}

module.exports = passport;
