interface Fotos{
   id:number;
   nombre:string;
   descripcion:string;
   activo:boolean;
};

let ListaFotos=Array<Fotos>();
const nombre:string="pepito";


ListaFotos=[
    {
    "id":1,
    "nombre":"Pepito",
    "descripcion":"descripcion de la foto",
    "activo":true
    },{
    "id": 2,
    "nombre":"pepita",
    "descripcion":"descripcion de la foto",
    "activo":true  
    }
];


function Hola(){
      console.log(`Hola ${ListaFotos[0].nombre}`);
}

window.addEventListener("load",Hola);




