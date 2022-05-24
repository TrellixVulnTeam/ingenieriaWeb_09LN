const express =require("express");
const router=express.Router();
const app=express();
const configuracion={
    port:3005,
    hostname:"localhost"
};

router.get('/',(req:any,res:any)=>{
    res.json("hola mundo");
})
router.post('/login',(req:any,res:any)=>{
    //const id=req.body.id;
    res.json("metodo post");
});

app.use("/api",router);

app.listen(configuracion, function(){
     console.log(`corriendo servidor ${configuracion.hostname} en puerto ${configuracion.port}`);
});




