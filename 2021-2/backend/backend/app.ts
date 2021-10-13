import {datos} from './datos';

const http=require("http");

let datosP=new Array<datos>();

datosP=[{nombre:"Juanito",apellidos:"pepe",edad:12,fecha:new Date()}];


const opciones={
    port:3004,
    hostname:"localhost",
    method:"GET",
    heders:{
        'Content-Type':'application/json'
    }
}

const server=http.createServer(opciones,(req:any,res:any)=>{
    if(opciones.method=="GET")
         res.end(JSON.stringify(datosP));
});

server.listen(opciones,()=>{
    console.log(`servidor corriendo ${opciones.hostname} en el puerto ${opciones.port}`)
})