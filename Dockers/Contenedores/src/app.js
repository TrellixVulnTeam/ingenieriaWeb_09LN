"use strict";
var express = require("express");
var morgan = require("morgan");
var app = express();
app.use(morgan('dev'));
app.use(require('./routes/index'));
module.exports = app;
