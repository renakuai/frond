const dotenv = require('dotenv');
dotenv.config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const passport = require("passport");
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');

//const indexRouter = require('./routes/index.js');

//1. CREATE APP
const app = express();
app.use(cookieParser());

//create rate limiting rule
const apiRequestLimiter = rateLimit({
  ms: 1 * 60 * 1000,
  max: 100,
  message: "Maximum number of tries exceeded. Please try again in a minute."
})

app.use(cors({ origin: true, credentials: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//2. SETUP DB
const mongoDB = process.env.MONGO_URL
mongoose.connect(mongoDB, { useNewURLParser: true, useUnifiedTopology: true });

//get default connection + bind error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//3. INTIALIZE PASSPORT
app.use(passport.initialize());
require("./middlewares/jwt")(passport);

//4. CONFIGURE ROUTES
//app.use('/', indexRouter);
//app.use('/protected', protectedRouter);
require('./routes/index')(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
