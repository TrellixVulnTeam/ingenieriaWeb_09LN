window.onload=Saludo();

var galeria=["1.png","2.png","3.png","4.png"];

idGaleria=document.getElementById("galeria");
for(var i=0;i<galeria.length;i++){
    var elemento=document.createElement("li");
    elemento.innerHTML="<img src='images/"+galeria[i]+"'/>";
    idGaleria.appendChild(elemento);
}

function Saludo(){
    //alert("saludo");
    document.getElementById("saludo").innerHTML="Hola Mundo";
}










