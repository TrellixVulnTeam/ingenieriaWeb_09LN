let form=document.getElementById("formulario") as HTMLFormElement;

form.addEventListener("submit",function(event){
    let usuario:any=document.getElementById("email");
    let contrasena:any=document.getElementById("contrasena");

    form.style.display="none";
    let mensaje=document.getElementById("mensaje") as HTMLFormElement;

    if(usuario.value=="pepito@gmail.com" && contrasena.value=="123"){
        mensaje.innerHTML="Bienvenido a nuestro sitio";
        mensaje.style.color="red";
        form.style.display="none";
    }else{
        mensaje.innerHTML="Datos Incorrectos";
        mensaje.style.color="red";
        form.style.display="block";
    }

    event.preventDefault();
});

