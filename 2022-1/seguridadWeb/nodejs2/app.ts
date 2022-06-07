const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const configuracion={
    hostname: "127.0.0.1",
    port: 3000,
}

app.post('/autenticacion',(req:any,res:any)=>{
    let email=req.body.email;
    let password=req.body.password;
    
    console.log("password: "+password +"email:"+email );

    if(email=="sandra.cano@pucv.cl" && password=="123"){
        console.log("datos correctos")
    }else{
        res.send('Por favor usuario y password');
        res.end();
    }
});

app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
});