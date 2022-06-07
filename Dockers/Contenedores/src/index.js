"use strict";
var app1 = require('./app');
var configuracion = {
    port: 3000,
    hostname: "localhost"
};
app1.listen(configuracion, function () { return console.log("servidor en el puerto " + configuracion.port + " "); });
