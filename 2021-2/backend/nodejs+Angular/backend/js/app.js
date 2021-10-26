"use strict";
var express = require('express');
var app = express();
var port = 3000;
var configuracion = {
    server: "127.0.0.1",
    port: 6001
};
//CRUD: create (post), read (get), update (put), delete (delete)
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(configuracion, function () {
    console.log("Example app listening at http://" + configuracion.server + ":" + configuracion.port);
});
