"use strict";
var express = require("express");
var jwt = require("jsonwebtoken");
var env = require("./config/config");
var cors = require("cors");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//base de datos
var mysql = require('mysql');
var Configuracion = {
    server: env.SERVER,
    port: env.PORT
};
var connection = mysql.createConnection({
    host: env.HOST,
    user: env.USER,
    port: 3306,
    password: env.PWD,
    database: env.DATABASE
});
//CONEXIÓN A DB
connection.connect(function (error) {
    if (error) {
        console.log("no se logro conectar");
        return;
    }
    console.log('conectado a mysql');
    //aqui debemos colocar lo demás 
});
app.get('/token', function (req, res) {
    jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'bar' }, env.TOKEN, function (error, token) {
        console.log(token);
        res.json(token);
    });
});
//rutasegura
var rutaSegura = express.Router();
rutaSegura.use(function (req, res, next) {
    var tokens = req.headers["access-token"];
    console.log(tokens);
    jwt.verify(tokens, env.TOKEN, function (err, decoded) {
        if (err) {
            return res.json("Token invalida");
        }
        else {
            req.decoded = decoded;
            req.authenticated = true;
            next();
        }
    });
});
app.post('/login', rutaSegura, function (req, res) {
    var usuario = req.body.usuario;
    var password = req.body.password;
    console.log(usuario);
    connection.query("SELECT id,correo_electronico FROM usuarios where correo_electronico=? and contrasena=md5(?)", [usuario, password], function (error, resultados, fields) {
        if (error) {
            throw (error);
        }
        else {
            res.send(resultados);
        }
    });
});
//CONEXIÓN SERVIDOR
app.listen(Configuracion, function () {
    console.log("servidor escuchando " + Configuracion.server + ":" + Configuracion.port);
});
