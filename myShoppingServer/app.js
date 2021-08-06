var express = require('express');
var path = require('path');
var cors = require('cors');
var {origin}= require('./config.json')

var indexRouter = require('./routes/index');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors({origin}))

app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.listen(5000,() => console.log("Server Started..."));

module.exports = app;
