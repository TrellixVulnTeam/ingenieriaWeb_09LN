var express = require('express');
var mysql = require('mysql');
var app = express();
var servidor = "127.0.0.1";
var puerto = 3007;
//configuracion de la conexión
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'Tiquetes'
});
connection.connect(function (error) {
    if (error) {
        console.log("no se logro conectar");
        return;
    }
    console.log('conectado a mysql');
    //aqui debemos colocar lo demás 
});
//métodos CRUD=Create ==post, Read==get, Update==put, Delete==delete
app.get('/', function (req, res) {
    res.send("hola mundo");
});
app.get('/usuarios', function (req, res) {
    connection.query("SELECT * FROM usuarios", function (req1, resultados) {
        console.log(resultados);
        //res.send(resultados);
        res.status(200).send(resultados);
    });
});
app.get('/usuarios/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    connection.query("SELECT * FROM usuarios WHERE id=?", id, function (req1, resultados) {
        res.status(200).send(resultados);
    });
});
app.listen(puerto, function () {
    console.log("servidor escuchando localhost:" + puerto);
});
