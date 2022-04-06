"use strict";
var nombre = "saludo";
var numero = 2;
var msg = "hola mundo";
saludo(msg);
function saludo(msg) {
    console.log(msg);
}
//Coleccion de objetos con JSON
var Nombres = [
    { "id": 1,
        "nombre": "pepito",
        "apellidos": "perez"
    },
    { "id": 1,
        "nombre": "pepito",
        "apellidos": "perez"
    }
];
var factura = [
    { "Codigo": 123,
        "Cliente": {
            "id": 1,
            "Nombre": "pepito",
            "Apellido": "perez"
        },
        "Productos": [
            { "id": 1, "Nombre": "producto1", "precio": 12.2 },
            { "id": 1, "Nombre": "producto1", "precio": 12.2 },
            { "id": 1, "Nombre": "producto1", "precio": 12.2 }
        ]
    }
];
console.log("Factura " + factura[0].Productos[0] + " es el tama\u00F1o");
