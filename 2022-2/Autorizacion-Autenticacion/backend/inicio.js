"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var encriptacion_1 = require("./encriptacion");
var express = require("express");
var mysql = require('mysql');
var jwt = require("jsonwebtoken");
//Alternativa 1: para variables de entorno crear un archivo externo js
//const token=require("./config/config");
//Alternativa 2: creando un archivo .env para crear variables entorno.
require('dotenv').config({ path: 'config/configuracion.env' });
var token = process.env.SECRET_KEY;
var app = express();
var bodyParser = require('body-parser');
var cors = require("cors");
var Configuracion = {
    server: "127.0.0.1",
    port: process.env.PORT
};
//configuracion de la conexión
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERDB,
    port: 3306,
    password: process.env.PWDDB,
    database: process.env.DATABASE
});
connection.connect(function (error) {
    if (error) {
        console.log("no se logro conectar");
        return;
    }
    console.log('conectado a mysql');
    //aqui debemos colocar lo demás 
});
//app.use(bodyParser.urlencoded({ extended: false }))
//este permite que los datos vengan en formato JSON desde front-end
app.use(bodyParser.json());
//permite que pueda acceder a la url del servicio web.
app.use(cors());
//métodos CRUD=Create ==post, Read==get, Update==put, Delete==delete
app.get('/', function (req, res) {
    res.send("hola mundo");
});
//Generar el token para enviarlo al front-end
var rutaSegura = express.Router();
rutaSegura.use(function (req, res, next) {
    var tokens = req.headers["access-token"];
    console.log(tokens);
    jwt.verify(tokens, token, function (err, decoded) {
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
app.get('/token', function (req, res) {
    jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'bar' }, token, function (error, token) {
        console.log(token);
        res.json(token);
    });
});
//usando token
app.post('/login', rutaSegura, function (req, res) {
    var usuario = req.body.usuario;
    var password = req.body.password;
    //let passwordencriptado=encriptar(password,"2e59128e34bdc4794678157722530a621bac274131394e9106c6f5225a91634e5ca8cea626d01e499583f424b36139c0044898c2b9c309b5436dfd48a1c0a50d");
    //console.log("psasorencrip"+passwordencriptado);
    connection.query("SELECT id,correo_electronico,salt,contrasena FROM usuarios where correo_electronico=?", [usuario], function (error, resultados, fields) {
        //res.send(resultados);
        if (error) {
            throw (error);
        }
        else {
            //console.log(JSON.stringify(resultados));
            var passwordN = encriptacion_1.validarPassword(password, resultados[0]["salt"]);
            if (passwordN == resultados[0]["contrasena"])
                res.send({ "token": token, "usuario": resultados[0]["correo_electronico"] });
            else
                res.send();
        }
    });
});
/* este el método de login pero sin usar un token */
app.post('/loginsintoken', function (req, res) {
    var usuario = req.body.usuario;
    var password = req.body.password;
    //encriptación password 
    //encriptación password 
    //let passwordencriptado=encriptar(password);
    connection.query("SELECT id,correo_electronico FROM usuarios where correo_electronico=?", [usuario], function (error, resultados, fields) {
        //res.send(resultados);
        if (error) {
            throw (error);
        }
        else {
            res.send({ "token": token, "usuario": resultados["correo_electronico"] });
        }
    });
});
app.listen(Configuracion, function () {
    console.log("servidor escuchando " + Configuracion.server + ":" + Configuracion.port);
});