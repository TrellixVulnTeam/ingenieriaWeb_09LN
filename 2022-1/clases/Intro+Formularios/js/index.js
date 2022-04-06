"use strict";
var form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
    var usuario = document.getElementById("email");
    var contrasena = document.getElementById("contrasena");
    form.style.display = "none";
    var mensaje = document.getElementById("mensaje");
    if (usuario.value == "pepito@gmail.com" && contrasena.value == "123") {
        mensaje.innerHTML = "Bienvenido a nuestro sitio";
        mensaje.style.color = "red";
        form.style.display = "none";
    }
    else {
        mensaje.innerHTML = "Datos Incorrectos";
        mensaje.style.color = "red";
        form.style.display = "block";
    }
    event.preventDefault();
});
