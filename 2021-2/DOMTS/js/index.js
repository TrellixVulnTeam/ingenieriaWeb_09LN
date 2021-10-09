"use strict";
var clima = [{
        "id": 1,
        "nombre": "Valparaiso",
        "clima": [
            {
                "dia": 1,
                "tipo": "nublado"
            },
            { "dia": 2,
                "tipo": "soleado"
            },
            { "dia": 3,
                "tipo": "lluvioso"
            },
            { "dia": 4,
                "tipo": "lluvioso"
            },
            { "dia": 5,
                "tipo": "lluvioso"
            },
            { "dia": 6,
                "tipo": "lluvioso"
            },
            { "dia": 7,
                "tipo": "lluvioso"
            }
        ]
    },
    {
        "id": 2,
        "nombre": "Metropolitana",
        "clima": [{
                "dia": 1,
                "tipo": "soleado"
            },
            { "dia": 2,
                "tipo": "soleado"
            },
            { "dia": 3,
                "tipo": "lluvioso"
            },
            { "dia": 4,
                "tipo": "lluvioso"
            },
            { "dia": 5,
                "tipo": "lluvioso"
            },
            { "dia": 6,
                "tipo": "lluvioso"
            },
            { "dia": 7,
                "tipo": "lluvioso"
            }]
    }
];
function menu() {
    var menu = document.getElementById("menu");
    var seccion = document.getElementById("contenido");
    var cabeza = document.getElementsByTagName("div")[0];
    var variable = "";
    var semana = "";
    var _loop_1 = function (i) {
        var li = document.createElement("li");
        menu.appendChild(li).innerHTML = "<a href='#' id='" + clima[i].id + "'>" + clima[i].nombre + "</a>";
        li.addEventListener("click", function () {
            //remover hijos de section
            var e = document.querySelector("section");
            var child = e === null || e === void 0 ? void 0 : e.lastElementChild;
            while (child) {
                e === null || e === void 0 ? void 0 : e.removeChild(child);
                child = e === null || e === void 0 ? void 0 : e.lastElementChild;
            }
            //fin de hijos
            //remover hijos h1
            var e1 = document.querySelector("div");
            var child1 = e1 === null || e1 === void 0 ? void 0 : e1.lastElementChild;
            while (child1) {
                e1 === null || e1 === void 0 ? void 0 : e1.removeChild(child1);
                child1 = e1 === null || e1 === void 0 ? void 0 : e1.lastElementChild;
            } //remover hijos h1
            var ul = document.createElement("ul");
            var h1 = document.createElement("h1");
            cabeza.appendChild(h1).innerHTML = "Chile - " + clima[i].nombre;
            seccion.appendChild(ul);
            for (var j = 0; j < clima[i].clima.length; j++) {
                var li_1 = document.createElement("li");
                switch (clima[i].clima[j].dia) {
                    case 1:
                        semana = "Lunes";
                        break;
                    case 2:
                        semana = "Martes";
                        break;
                    case 3:
                        semana = "Miércoles";
                        break;
                    case 4:
                        semana = "Jueves";
                        break;
                    case 5:
                        semana = "Viernes";
                        break;
                    case 6:
                        semana = "Sábado";
                        break;
                    case 7:
                        semana = "Domingo";
                        break;
                }
                ul.appendChild(li_1).innerHTML = semana + "<br><img src='imagenes/" + clima[i].clima[j].tipo + ".png' width='50' height='50'>";
            }
        });
    };
    for (var i = 0; i < clima.length; i++) {
        _loop_1(i);
    }
}
window.addEventListener("load", menu);
