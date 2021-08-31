"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Galeria = Array();
Galeria = [
    {
        "id": 1,
        "nombre": "Pepito",
        "descripcion": "descripcion de la foto",
        "activo": true,
        "imagen": "1.png",
    }, {
        "id": 2,
        "nombre": "pepita",
        "descripcion": "descripcion de la foto",
        "activo": true,
        "imagen": "2.png"
    },
    { "id": 3,
        "nombre": "pepita",
        "descripcion": "descripcion de la foto",
        "activo": true,
        "imagen": "3.png"
    }
];
function ConstruirGaleria() {
    var i;
    var LFoto = document.getElementById("fotos");
    var li = document.createElement("li");
    for (i = 0; i < Galeria.length; i++) {
        var li_1 = document.createElement("li");
        //LFoto.appendChild(li).innerHTML="<img src='imgs/"+Galeria[i].imagen+"'>";
        LFoto.appendChild(li_1).innerHTML = "<img src=\"imgs/" + Galeria[i].imagen + "\">";
    }
}
window.addEventListener("load", ConstruirGaleria);
