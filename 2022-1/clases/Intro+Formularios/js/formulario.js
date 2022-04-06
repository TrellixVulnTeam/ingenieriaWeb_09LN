var formulario=document.getElementById("formulario");

/*
document.querySelector("#formulario").addEventListener("submit",validar);

function validar(e){
    console.log("bienvenido");
    e.preventDefault();
}
*/


formulario.addEventListener("submit",function(event){
    var usuario=document.getElementById("email");
    var contrasena=document.getElementById("contrasena");
    formulario.style.display="none";
    console.log(usuario.value);

    

    var mensaje=document.getElementById("mensaje");
    mensaje.innerHTML="Bienvenido a nuestro sitio";
    mensaje.style.color="red";

    event.preventDefault();
});

