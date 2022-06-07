"use strict";
var http = require('http');
var hostname = '127.0.0.1';
var port = 3001;
var server = http.createServer(function (request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    var objeto = { "nombre": "peptito", "edad": 2 };
    response.end("Prueba");
});
server.listen(port, hostname, function () {
    console.log("El servidor se est\u00E1 ejecutando en http://" + hostname + ":" + port + "/");
});
