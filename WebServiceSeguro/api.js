"use strict";
var express = require("express");
var jwt = require('jsonwebtoken');
var llave = require('./configs/config');
var bodyParser = require('body-parser');
var app = express();
var tokenValidar = llave.llavesin;
var token = jwt.sign({ check: true }, tokenValidar);
console.log(token);
var rutaSegura = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.set("llave", tokenValidar);
app.use(express.static('publica'));
rutaSegura.use(function (req, res, next) {
    var token = req.headers["access-token"];
    //console.log(app.get('llave'));
    if (token) {
        jwt.verify(token, app.get('llave'), function (err, decoded) {
            if (err) {
                return res.json({ mensaje: "token invalido" });
            }
            else {
                req.decoded = decoded;
                console.log("entro" + decoded);
                next();
            }
        });
    }
    else {
        res.send({
            mensaje: 'Token no proveída.'
        });
    }
});
app.get('/noticias', rutaSegura, function (req, res) {
    res.send('Hello World');
});
app.listen(4022);
