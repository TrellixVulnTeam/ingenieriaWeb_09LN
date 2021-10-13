"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var datosP = new Array();
datosP = [{ nombre: "Juanito", apellidos: "pepe", edad: 12, fecha: new Date() }];
var opciones = {
    port: 3004,
    hostname: "localhost",
    method: "GET",
    heders: {
        'Content-Type': 'application/json'
    }
};
var server = http.createServer(opciones, function (req, res) {
    if (opciones.method == "GET")
        res.end(JSON.stringify(datosP));
});
server.listen(opciones, function () {
    console.log("servidor corriendo " + opciones.hostname + " en el puerto " + opciones.port);
});
