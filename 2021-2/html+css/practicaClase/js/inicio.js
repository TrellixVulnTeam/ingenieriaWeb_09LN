var imagenes=["1.png","2.png","3.png","4.png","5.png","6.png","7.png"];

window.addEventListener("load",cargar);

function cargar(){
var fotos=document.getElementById("fotos");

for (var i=0;i<imagenes.length;i++){

	var elemento=document.createElement("li");
	var elemento2=document.createElement("img");
	var elemento3=document.createElement("div");
	var elemento4=document.createElement("span");
	var elemento5=document.createElement("span");
	elemento2.src="imgs/"+imagenes[i];
	elemento2.alt="descripcion "+imagenes[i];
	elemento4.className="material-icons red";

	elemento5.id="fuente";

	fotos.appendChild(elemento);
	elemento.appendChild(elemento2);
	elemento.appendChild(elemento3);
	elemento3.appendChild(elemento4).textContent="favorite";
    elemento3.appendChild(elemento5).textContent=1;

     elemento5.addEventListener("click",function(){
	      console.log("Hola");
     });
}
}





/*
var elementoEvento=document.getElementById("fuente");
elementoEvento.addEventListener("click",function(){
	 console.log("Hola");
});
*/


/*
for(var i=0;i<elemento.length;i++){
	 console.log("elemento de "+ elemento[i]);
}

var elemento=document.getElementById("galeria");

elemento.addEventListener("click",evento);

function evento(){
	
	console.log("hola mundo");

}

console.log(elemento);

*/


