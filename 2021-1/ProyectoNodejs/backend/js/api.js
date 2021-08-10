"use strict";
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var hostname = '127.0.0.1';
var port = 3023;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'prueba'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
// metodos para acceder a los datos
app.get('/datos', function (req, res) {
    connection.query("select * from usuarios", function (error, resultados, campos) {
        console.log(resultados);
        //console.log(datos);
        //res.send(resultados);
        res.status(200).send(resultados);
    });
});
app.get('/usuario/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    connection.query("select * from usuarios where id=?", id, function (error, resultados) {
        console.log(resultados);
        //console.log(datos);
        res.send(resultados);
    });
});
app.post('/insertar', urlencodedParser, function (req, res) {
    var usuario = req.body.usuario;
    var clave = req.body.clave;
    console.log(usuario);
    connection.query("insert into usuarios(usuario,clave)values('" + usuario + "','" + clave + "')", function (error, resultados) {
        res.status(201).send("User added with ID: " + resultados.insertId);
    });
});
app.put('/actualizar/:id', urlencodedParser, function (req, res) {
    var id = req.params.id;
    var usuario = req.body.usuario;
    console.log(id);
    connection.query("update usuarios set usuario=? where id=?", [usuario, id], function (error, resultados) {
        res.status(200).send('Usuario actualizado');
    });
});
//app.delete()
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
