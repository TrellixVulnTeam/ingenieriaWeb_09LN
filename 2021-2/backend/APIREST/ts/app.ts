const express = require('express')
const app = express();
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const configuracion={
    hostname: "127.0.0.1",
    port: 3000,
}
//CRUD: Create (post), Read (get), Update (put), Delete (delete)

app.get('/Usuarios', (req:any, res:any) => {
    let Usuarios={
        "id": 1,
        "nombre":"pepito",
        "apellidos":"perez"
    }
    res.send(JSON.stringify(Usuarios));
})

app.get('/Usuarios/:id', (req:any, res:any) => {
    let id=req.params.id;
    console.log(`el id del usuario es ${id}`);
    res.send("se encontro el usuario");
});

app.post('/CrearUsuarios',jsonParser,(req:any,res:any)=>{
    let usuario=req.body.usuario;
    let clave=req.body.clave;
    let correo=req.body.correo;
    
    if(usuario!=""){
       console.log(`Usuario ${usuario} con la clave ${clave} y correo ${correo}`);
       res.status(201).send("datos creados");
    } 
});

app.put('/Actualizar/:id',jsonParser, (req:any, res:any)=>{
    let id=req.params.id;
    let usuario=req.body.usuario;
    let clave=req.body.clave;
    let correo=req.body.correo;

    console.log(`Usuario ${usuario} con la clave ${clave} y correo ${correo} y id ${id} han sido modificados`);
    res.send("datos modificados");

});

app.delete('/Eliminar/:id',(req:any,res:any)=>{
  let id=req.params.id;
  res.status(200).send(`se elimino el dato ${id}`);
});


app.listen(configuracion, () => {
  console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})