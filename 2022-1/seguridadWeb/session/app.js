"use strict";
var express = require("express");
var session = require("express-session");
var app = express();
var MYSQLStore = require('express-mysql-session');
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Tiquetes'
};
var sessionStore = new MYSQLStore(options);
app.use(session({
    key: 'session_cookie_name',
    secret: '123',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));
app.get('/', function (req, res) {
    req.session.usuario = "juan";
    req.session.rol = "admin";
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
    res.send("el usuario <strong>" + req.session.usuario + "</strong> ha visitado " + req.session.visitas);
});
app.listen(3000, function (req, res) {
    console.log("servidor on");
});
