/*var texto="hola";
texto=1;
texto=1.2;
texto=true;*/
/*var mensaje=document.getElementById("mensaje");
mensaje.innerHTML="<p>Hola Mundo</p>";*/

//console.log(texto);

var formulario=document.getElementById("formulario");
formulario.addEventListener("submit",function(event){
   var email=document.getElementById("email").value;
   var password=document.getElementById("contrasenia").value;

   if(email=="pepito@gmail.com" && password=="123"){
        //validar que esten llenos
        var mensaje=document.getElementById("mensaje");
        mensaje.innerHTML="Formulario lleno";
        mensaje.style.color="red";
        formulario.style.display="none";
        console.log("El correo electrónico es "+email);
   }else{
    var mensaje=document.getElementById("mensaje");
    mensaje.innerHTML="datos incorrectos";
    mensaje.style.color="red";
   }
   event.preventDefault();
});