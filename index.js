//Require Express
const express = require('express');
const app = express();
const port = 8000;

//URL Encoder
app.use(express.urlencoded());

//Setup Layouts
const expressLayouts = require('express-ejs-layouts');

//Setup DB
const db = require('./config/mongoose');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passpost-local-strategy');
const MongoStore = require('connect-mongo');

app.use(express.static('./assets'));

//Here we use Layouts
app.use(expressLayouts);

//Extract styles and scripts from subpages to the alyout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);

//Setup Ejs
app.set( 'view engine' , 'ejs' );
app.set('views' , './views' );


//Mongo store is used to store the session cookie
app.use(session({
    name:'codeial',
    //TODO - change the secret before deployment
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create({
        mongoUrl: "mongodb://127.0.0.1:27017",
        autoRemove: "disabled",
    })
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//use exxpress router
app.use( '/' , require('./routes/index' ));

//To check if server is running
app.listen(port, function (err) {
    if (err) {
        console.log(` Error: ${err} `);
    }
    console.log(`Server is up and running on Port: ${port} `);
});