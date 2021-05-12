let express = require('express');
let mysql=require('mysql');
let cors=require('cors');
let bodyParser = require('body-parser');
let app=express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

const hostname = '127.0.0.1';
const port = 3023;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root', 
    port     : 3306,
    password : '',
    database : 'prueba'
  });

  connection.connect(function(err:any) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// metodos para acceder a los datos
  app.get('/datos', (req:any,res:any)=>{
      connection.query("select * from usuarios", function(error:any, resultados:any, campos:any){
         console.log(resultados);
         //console.log(datos);
         //res.send(resultados);
         res.status(200).send(resultados);
      });
  });

  app.get('/usuario/:id',(req:any,res:any)=>{
    const id=req.params.id;
    console.log(id);
    connection.query("select * from usuarios where id=?",id,function(error:any, resultados:any){
        console.log(resultados);
        //console.log(datos);
        res.send(resultados);
     }); 
  });

 app.post('/insertar',urlencodedParser,(req:any,res:any)=>{
     let usuario=req.body.usuario;
     let clave=req.body.clave;
      console.log(usuario);
      connection.query("insert into usuarios(usuario,clave)values('"+usuario+"','"+clave+"')",(error:any,resultados:any)=>{
        res.status(201).send(`User added with ID: ${resultados.insertId}`);
      });
});

app.put('/actualizar/:id',urlencodedParser,(req:any,res:any)=>{
      const id=req.params.id;
      const usuario=req.body.usuario;
      console.log(id);
      connection.query("update usuarios set usuario=? where id=?",[usuario,id],(error:any,resultados:any)=>{
            res.status(200).send('Usuario actualizado');
      });
});

//app.delete()




  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });



