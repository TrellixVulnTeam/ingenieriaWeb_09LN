"use strict";
var express = require('express');
var app = express();
var puerto = 3001;
app.get('/', function (req, res) {
    res.send('Hola Mundo');
});
app.listen(puerto, function () {
    console.log("Example app listening on port " + puerto);
});
