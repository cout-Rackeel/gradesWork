 const port = process.env.PORT || 8080;

 // BASE VARIABLES
 var express = require('express');
 var validator = require('express-validator');
 var flash = require('express-flash');
 var session = require('express-session');
 var bodyParser = require('body-parser');
 var cookieParser = require('cookie-parser');
 var mysql =  require('mysql');
 var path = require('path');
 var expressLayouts = require('express-ejs-layouts');

 // Route declarations
 var indexRoute = require('./routes/index');
 var studentsRoute = require('./routes/students');
 var gradesRoute = require('./routes/grades');

 // App declaration
 var app = express();

 // Setup Views
 app.set('views' , path.join(__dirname, 'views'));
 app.set('view engine' , 'ejs');

// Setup layouts
 app.set('layout','layouts/layout');
 app.use(expressLayouts);

 //Setting up Public
app.use(express.static(path.join(__dirname , 'public')))

 // Setting up Body Parser NOTE MUST GO BEFORE ROUTE MIDDLEWARE
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));


 // Setup Route middlewares
 app.use('/', indexRoute);
 app.use('/students', studentsRoute);
 app.use('/grades', gradesRoute);
//  app.use('/login', loginRoute);

 
  // Setting up Session
  app.use(cookieParser());
  app.use(session({
    secret:'momobogumgumbo',
    saveUninitialized:true,
    resave: false,
    cookie: {maxAge:120000}
  }));
  app.use(flash());


  app.listen(port , () => {console.log(`Connected to Port ${port}`)});

  module.exports = app

