"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Requiring module
var express = require("express");
var fs = require("fs");
var path = require('path');
var app = express();
function authentication(req, res, next) {
    var authheader = req.headers.authorization;
    console.log(req.headers);
    if (!authheader) {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
    var auth = Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    if (user == 'admin' && pass == '123') {
        // If Authorized user
        next();
    }
    else {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
}
// First step is the authentication of the client
app.use(authentication);
app.use(express.static(path.join(__dirname, 'public')));
// Server setup
app.listen((3000), function () {
    console.log("Server is Running ");
});
