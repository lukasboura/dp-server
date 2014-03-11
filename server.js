var express = require('express'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    fs = require('fs');

var app = express();

var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/diplomka';

//connect to database
mongoose.connect(mongoUrl);

//Bootstrap model
require('./models/model').initialize();

//passport config
require('./config/passport')(passport);

//express config
require('./config/express')(app, passport);

//setup routes
require('./config/routes')(passport, app);

// start app by listening
app.listen(process.env.PORT || 3000);
