"use strict";
require('dotenv').config();
//CONEXION A LA DB
var Pool = require('pg').Pool;
var pool = new Pool({
    user: process.env.USUARIO,
    host: process.env.LOCALHOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});
var PostArtistas = function (req, res) {
    console.log(req.body.nombre);
    pool.query("INSERT INTO \"Artistas\" (nombre,descripcion,foto)VALUES($1,$2,$3) RETURNING *", [req.body.nombre, req.body.descripcion, req.body.foto], function (err, respuesta) {
        if (err) {
            console.error(err);
            return;
        }
        else {
            console.log(respuesta.rows[0].id);
            res.send(JSON.stringify({ "status": "ok", "item": respuesta.rows[0].id }));
        }
    });
};
module.exports = {
    PostArtistas: PostArtistas
};
