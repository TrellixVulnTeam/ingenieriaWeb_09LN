"use strict";
var express = require("express");
var router = express.Router();
var app = express();
var configuracion = {
    port: 3005,
    hostname: "localhost"
};
router.get('/', function (req, res) {
    res.json("hola mundo");
});

router.post('/login', function (req, res) {
    //const id=req.body.id;
    res.json("metodo post");
});
app.use("/api", router);
app.listen(configuracion, function () {
    console.log("corriendo servidor " + configuracion.hostname + " en puerto " + configuracion.port);
});
