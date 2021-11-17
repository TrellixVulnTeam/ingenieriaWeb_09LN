"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var ArtistasLista = require('./getArtistas');
var Insertar = require('./postArtistas');
var configuracion = {
    hostname: "127.0.0.1",
    port: 3001,
};
//https://node-postgres.com/
app.use(cors());
// create application/json parser
app.use(bodyParser.json());
//GET
//app.get('/Artistas',ArtistasLista.GetArtistas);
app.post('/InsertarArtistas', bodyParser.json(), Insertar.PostArtistas);
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://" + configuracion.hostname + ":" + configuracion.port);
});
