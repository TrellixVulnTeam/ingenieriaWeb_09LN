"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
//import  cors from 'cors';
var cors = require('cors');
var app = express_1.default();
var router = express_1.Router();
var configuracion = {
    server: "127.0.0.1",
    port: 6001
};
//CRUD: create (post), read (get), update (put), delete (delete)
app.use(cors());
app.use(express_1.default.json());
app.get('/', function (req, res) {
    var datos = { "nombre": "pepito", "codigo": 1 };
    var salida = {
        "msg": "ok",
        "data": datos,
    };
    res.send(JSON.stringify(salida));
});
app.get('/:id', function (req, res) {
    var id = req.params;
    var salida = {
        "msg": "ok",
        "data": id
    };
    res.send(JSON.stringify(salida));
});
app.get('/items', function (req, res) {
    var salida = {
        "msg": "ok",
        "data": req.query
    };
    res.send(JSON.stringify(salida));
});
/*
app.get('/items/:id/productos/:idProducto',(req:Request,res:Response)=>{
    let salida={
        "msg":"ok",
        "data":req.params
    }

    res.send(JSON.stringify(salida));
});
*/
app.post('/', function (req, res) {
    var datos = req.body;
    var salida = {
        "msg": "ok",
        "data": datos,
        "usuario": datos.usuario
    };
    res.send(JSON.stringify(salida));
});
app.put('/:id', function (req, res) {
    var salida = {
        "msg": "ok",
        "id": req.params,
        "datos": req.body
    };
    res.send(JSON.stringify(salida));
});
app.delete('/:id', function (req, res) {
    var salida = {
        "msg": "ok",
        "id": req.params
    };
    res.send(JSON.stringify(salida));
});
//app.use('/api/usuario',router);
app.listen(configuracion, function () {
    console.log("servidor iniciado en http://" + configuracion.server + ":" + configuracion.port);
});
