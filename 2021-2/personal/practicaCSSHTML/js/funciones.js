var conteo1=0;
var imagenes=["1.png","2.png","3.png","4.png","5.png","6.png","7.png"];

var conteo=[0,0,0,0,0,0,0];
console.log(conteo[0]);


window.addEventListener('load', Cargar);

function Cargar(){

for(var i=0;i<imagenes.length;i++){
	imagenesTag=document.getElementById("fotos");
	foto=document.createElement("li");
	div=document.createElement("div");
	div.id="corazon"+(i+1);
	span=document.createElement("span");
	span1=document.createElement("span");

	imagenesTag.appendChild(foto).innerHTML="<img src='imgs/"+imagenes[i]+"'>";
    foto.appendChild(div);
    span.className="material-icons red";
    span1.className="fuente";
    div.appendChild(span).textContent="favorite";
    div.appendChild(span1);
    
	    div.addEventListener("click",function(){
			conteo1++;
			console.log(conteo1);
			this.appendChild(span1).textContent=conteo1;
		});
  }
}


for(var i=0;i<imagenes.length;i++){
	//console.log("imagen"+imagenes[i]);
}

var elemento=document.getElementById("galeria");

elemento.addEventListener("click",function(){
	//console.log("salio");
});

/*var corazon1=document.getElementById("corazon1");


corazon1.addEventListener("click",function(){
		conteo1++;
	    var span=corazon1.getElementsByTagName("span");
	    console.log(span);
		corazon1.appendChild(span[1]).innerHTML=conteo1;
});
*/





