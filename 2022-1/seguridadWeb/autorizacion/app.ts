const express=require("express");
const jwt=require("jsonwebtoken");
const env=require("./config/config");
const cors=require("cors");

const bodyParser = require('body-parser');



const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
//base de datos
const mysql=require('mysql');
const Configuracion={
    server:env.SERVER,
    port : env.PORT
};

let connection = mysql.createConnection({
    host     : env.HOST,
    user     : env.USER,
    port     :  3306,
    password : env.PWD,
    database : env.DATABASE
  });

  //CONEXIÓN A DB
  connection.connect(function(error:any){
    if(error){
      console.log("no se logro conectar")
      return;
    }
    console.log('conectado a mysql');
    //aqui debemos colocar lo demás 
});

app.get('/token',(req:any,res:any)=>{
    jwt.sign(
        {exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: 'bar'}, env.TOKEN,function(error:any,token:any){
        console.log(token);
        res.json(token);
    });
});


//rutasegura
const rutaSegura=express.Router();
rutaSegura.use((req:any,res:any,next:any)=>{
    const tokens=req.headers["access-token"];
    console.log(tokens);

    jwt.verify(tokens, env.TOKEN, (err:any, decoded:any)=> {
        if(err){
            return res.json("Token invalida");
        }else{
            req.decoded=decoded;
            req.authenticated=true;
            next();
        }
    });
});


app.post('/login',rutaSegura,(req:any,res:any)=>{
    const usuario=req.body.usuario;
    const password=req.body.password;
      connection.query("SELECT id,correo_electronico FROM usuarios where correo_electronico=? and contrasena=md5(?)",[usuario,password],function(error:any,resultados:any,fields:any){
          
          if(error){
              throw(error);
          }else{
              res.send(resultados);
          }
          
      });
      
});


//CONEXIÓN SERVIDOR
app.listen(Configuracion,()=>{
    console.log(`servidor escuchando ${Configuracion.server}:${Configuracion.port}`);
});
