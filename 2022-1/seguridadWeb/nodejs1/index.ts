import { buffer } from "stream/consumers";

// Requiring module
const express = require("express");
const fs = require("fs");
var path = require('path');
 
const app = express();
 
function authentication(req:any, res:any, next:any) {
    var authheader = req.headers.authorization;
    console.log(req.headers);
 
    if (!authheader) {
        let err:any = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
    }

    let auth= Buffer.from(authheader.split(' ')[1],'base64').toString().split(':');
    
    var user = auth[0];
    var pass = auth[1];
 
    if (user == 'admin' && pass == '123') {
 
        // If Authorized user
        next();
    } else {
        let err:any = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
 
}
 
// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));
 
// Server setup
app.listen((3000), () => {
    console.log("Server is Running ");
})