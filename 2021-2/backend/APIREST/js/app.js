"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
//CRUD: Create (post), Read (get), Update (put), Delete (delete)
app.get('/Usuarios', function (req, res) {
    var Usuarios = {
        "id": 1,
        "nombre": "pepito",
        "apellidos": "perez"
    };
    res.send(JSON.stringify(Usuarios));
});
app.get('/Usuarios/:id', function (req, res) {
    var id = req.params.id;
    console.log("el id del usuario es " + id);
    res.send("se encontro el usuario");
});
app.post('/CrearUsuarios', jsonParser, function (req, res) {
    var usuario = req.body.usuario;
    var clave = req.body.clave;
    var correo = req.body.correo;
    if (usuario != "") {
        console.log("Usuario " + usuario + " con la clave " + clave + " y correo " + correo);
        res.status(201).send("datos creados");
    }
});
app.put('/Actualizar/:id', jsonParser, function (req, res) {
    var id = req.params.id;
    var usuario = req.body.usuario;
    var clave = req.body.clave;
    var correo = req.body.correo;
    console.log("Usuario " + usuario + " con la clave " + clave + " y correo " + correo + " y id " + id + " han sido modificados");
    res.send("datos modificados");
});
app.delete('/Eliminar/:id', function (req, res) {
    var id = req.params.id;
    res.status(200).send("se elimino el dato " + id);
});
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://localhost:" + configuracion.port);
});
