const express= require('express'); //server
const expressLayouts=require('express-ejs-layouts'); //template language
const mongoose =require('mongoose'); //Mongo driver(manages relations bw data ,schema)
const flash = require('connect-flash');
const session =require('express-session');
const path = require('path');

const app= express();

const passport=require('passport');

//Passport Config
require('./config/passport')(passport);

//DB CONFIG
const db=require('./config/keys').MongoURI;

// connect to Mongo 
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));

//EJS templatin language
app.use(expressLayouts);
app.set('view engine','ejs'); 

//Body parser
app.use(express.urlencoded({ extended: true }));

//express session middleware
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//connect flash
app.use(flash());

//global variable
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

//Static Files
app.use(express.static('public'));
app.use('/style',express.static(__dirname +'public/style'));
app.use('/js',express.static(__dirname +'public/js'));
app.use('/img',express.static(__dirname +'public/img'));


//Routes
app.use('/', require('./routes/index'));

app.use('/users',require('./routes/users'));

const PORT= process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
