let nombre:string="saludo";
let numero:number=2;
const msg="hola mundo";

saludo(msg);

function saludo(msg:string){
    console.log(msg);
}

//Coleccion de objetos con JSON
let Nombres=[
    { "id":1,
      "nombre":"pepito",
      "apellidos":"perez"
    },
    { "id":1,
      "nombre":"pepito",
      "apellidos":"perez"
    }
];

let factura=[
    { "Codigo":123,
      "Cliente":{
           "id":1,
           "Nombre":"pepito",
           "Apellido":"perez"
        },
       "Productos":[
           {"id":1,"Nombre":"producto1","precio":12.2},
           {"id":1,"Nombre":"producto1","precio":12.2},
           {"id":1,"Nombre":"producto1","precio":12.2}
          ]
    }
]


console.log(`Factura ${factura[0].Productos[0]} es el tamaño`);



