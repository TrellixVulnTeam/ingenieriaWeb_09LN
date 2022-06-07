"use strict";
var images = ["1.jpg", "2.jpg", "3.jpg"];
var ruta = "images";
//JSON productos destacados
var productos = [{
        "id": 1,
        "nombre": "producto1",
        "descripcion": "Producto que se describe",
        "imagen": "images/productos/1.png",
        "disponible": true
    },
    {
        "id": 2,
        "nombre": "producto1",
        "descripcion": "producto que se describe",
        "imagen": "images/productos/2.png",
        "disponible": false
    }
];

$(document).ready(function () {
 var palabra="";
 var boton="";
 for (var i = 0; i < images.length; i++) {
   if(i==0) palabra="active"; else palabra="";
     $("#carusell").append($("<div>",{"class":"carousel-item "+ palabra}).append($("<img>",{"class":"d-block w-100","alt":"...","src":ruta + "/" + images[i]})));
 }
 //productos destacados

 var productosdestacados = document.getElementById("productosdestacados");

 
//$("<button>",{"class":"btn btn-secondary","value":"Comprar"})

 for (var i = 0; i < productos.length; i++) {
    if (productos[i].disponible) boton = "<button class=\"btn btn-secondary\">Comprar</button>";
     else boton="<span class=\"alert alert-danger\">No hay Stock<span>";
    $("#productosdestacados").append($("<li>").append($("<img>",{"src":productos[i].imagen})).append("<p>"+productos[i].descripcion+"</p><br>"+boton));

 }



  //productos de seccion

  $("#arduino").click(function (e) { 

    console.log("sii");
    e.preventDefault();
    
});

});

   
   

