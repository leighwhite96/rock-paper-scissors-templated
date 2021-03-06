require(`dotenv`).config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');
var play = require('./routes/play');
var login = require('./routes/login');
var register = require('./routes/register');
var logout = require('./routes/logout');

const config = require(`./config/config.js`);


var app = express();

mongoose.connect(config.dburl,{ useMongoClient: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(session({
  secret: 'school of code secret',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

const requiredAuthentication = (req, res, next) => {
  if (req.session.isAuthenticated){
    next();
  } else {
    res.render('unauthorised');
  }
};

app.use((req,res,next) => {
  console.log(req.session);
  next();
});

app.use('/', index);
app.use('/play', requiredAuthentication, play);
app.use('/login',login);
app.use('/logout',logout);
app.use('/register',register);
app.use('/users',requiredAuthentication,users)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
