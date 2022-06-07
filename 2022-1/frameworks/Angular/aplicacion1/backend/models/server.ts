import express, {Application} from 'express';
import ProductRouter from '../routes/productos'; 
import cors from 'cors';
class Server{
    private app:Application;
    private port:number;
    private path={
        productos:'/api/productos'
    }
    constructor(){
        this.app=express();
        this.port=3000;
        this.middlewares();
        this.routes();
        
    }

    middlewares(){
        //CORS
         this.app.use(cors());
        //parseo BODY

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.path.productos,ProductRouter);
    }
    
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor inicializado ${this.port}`)
        });
    }

   
}

export default Server;