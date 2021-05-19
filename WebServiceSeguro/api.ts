const express=require("express");
const jwt = require('jsonwebtoken');
const llave=require('./configs/config');
const bodyParser = require('body-parser')
const app = express();
const tokenValidar=llave.llavesin;
let token = jwt.sign({check: true}, tokenValidar);
console.log(token);

let rutaSegura= express.Router();
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.set("llave", tokenValidar);
app.use(express.static('publica'));
rutaSegura.use((req:any,res:any,next:any)=>{
       const token=req.headers["access-token"];
       //console.log(app.get('llave'));
       if(token){
            jwt.verify(token,app.get('llave'),(err:any,decoded:any)=>{
                    if(err){
                        return res.json({mensaje:"token invalido"});
                    }else{
                        req.decoded=decoded;
                        console.log("entro"+decoded);
                        next();
                    }
            });
       }else {
        res.send({ 
            mensaje: 'Token no proveída.' 
        });
      }
});

app.get('/noticias',rutaSegura, function (req:any, res:any) {
   res.send('Hello World');
});
app.listen(4022);