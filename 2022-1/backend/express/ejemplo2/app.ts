import express, {Router, Request, Response} from 'express';
//import  cors from 'cors';


const cors=require('cors');
const app=express();
const router=Router();

const configuracion={
    server:"127.0.0.1",
    port:6001
};

 //CRUD: create (post), read (get), update (put), delete (delete)
 app.use(cors());
 app.use(express.json());

 app.get('/', (req:Request, res:Response) => {
    let datos={"nombre":"pepito","codigo":1};

    let salida={
        "msg": "ok",
        "data":datos,
    }
  res.send(JSON.stringify(salida));
});


app.get('/:id',(req:Request,res:Response)=>{
      let id=req.params;
      let salida={
          "msg":"ok",
          "data":id
      }

      res.send(JSON.stringify(salida));
});

app.get('/items',(req:Request,res:Response)=>{
    let salida={
        "msg":"ok",
        "data":req.query
    }

    res.send(JSON.stringify(salida));
});


app.get('/items/:id/productos/:idProducto',(req:Request,res:Response)=>{
    let salida={
        "msg":"ok",
        "data":req.params
    }

    res.send(JSON.stringify(salida));
});


app.post('/',(req:Request,res:Response)=>{
    let datos=req.body;
    let salida={
        "msg":"ok",
        "data":datos,
        "usuario":datos.usuario
    }
    res.send(JSON.stringify(salida));
 })

 app.put('/:id',(req:Request,res:Response)=>{
    let salida={
        "msg":"ok",
        "id":req.params,
        "datos":req.body
    }
    res.send(JSON.stringify(salida));
})

app.delete('/:id', (req:Request,res:Response) => {

    let salida={
        "msg":"ok",
        "id":req.params
    }
    res.send(JSON.stringify(salida));

  })
  
  //app.use('/api/usuario',router);

app.listen(configuracion, () => {
  console.log(`servidor iniciado en http://${configuracion.server}:${configuracion.port}`)
})