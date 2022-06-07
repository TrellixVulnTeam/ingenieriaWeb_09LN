"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.post('/autenticacion', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log("password: " + password + "email:" + email);
    if (email == "sandra.cano@pucv.cl" && password == "123") {
        console.log("datos correctos");
    }
    else {
        res.send('Por favor usuario y password');
        res.end();
    }
});
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://localhost:" + configuracion.port);
});
