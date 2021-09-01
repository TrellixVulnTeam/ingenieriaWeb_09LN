import {Fotos} from './Fotos';

let Galeria=Array<Fotos>();

Galeria=[
    {
    "id":1,
    "nombre":"Pepito",
    "descripcion":"descripcion de la foto",
    "activo":true,
    "imagen":"1.png",
    },{
    "id": 2,
    "nombre":"pepita",
    "descripcion":"descripcion de la foto",
    "activo":true,
    "imagen":"2.png"  
    },
    {"id": 3,
    "nombre":"pepita",
    "descripcion":"descripcion de la foto",
    "activo":true,
    "imagen":"3.png"
     } 
];


function ConstruirGaleria(){
   let i:number;
   let LFoto:any=document.getElementById("fotos");
   let li:any=document.createElement("li");
   for(i=0;i<Galeria.length;i++){
      let li:any=document.createElement("li");
      //LFoto.appendChild(li).innerHTML="<img src='imgs/"+Galeria[i].imagen+"'>";
      LFoto.appendChild(li).innerHTML=`<img src="imgs/${Galeria[i].imagen}">`;
   }
}
window.addEventListener("load",ConstruirGaleria);




