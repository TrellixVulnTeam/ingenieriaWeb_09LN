const express=require('express');
const mysql=require('mysql');
const app=express();

 const servidor="127.0.0.1";
 const puerto=3007;

 //configuracion de la conexión
 let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     :  3306,
    password : '',
    database : 'Tiquetes'
  });

  connection.connect(function(error:any){
       if(error){
         console.log("no se logro conectar")
         return;
       }
       console.log('conectado a mysql');
       //aqui debemos colocar lo demás 
  });

  //métodos CRUD=Create ==post, Read==get, Update==put, Delete==delete
 app.get('/',(req:any,res:any)=>{
     res.send("hola mundo");
 });

app.get('/usuarios',(req:any,res:any)=>{
       connection.query("SELECT * FROM usuarios",(req1:any,resultados:any)=>{
           console.log(resultados);
           //res.send(resultados);
           res.status(200).send(resultados);
       });
});

app.get('/usuarios/:id',(req:any,res:any)=>{
    let id=req.params.id;
    console.log(id);
    connection.query("SELECT * FROM usuarios WHERE id=?",id,(req1:any,resultados:any)=>{
       res.status(200).send(resultados);
    });
});

app.post('',(req:any,res:any)=>{
    
});


 app.listen(puerto,()=>{
     console.log(`servidor escuchando localhost:${puerto}`);
 });









