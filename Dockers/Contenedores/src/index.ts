const app1=require('./app');
const configuracion={
    port:3000,
    hostname:"localhost"
}

app1.listen(configuracion,()=>console.log(`servidor en el puerto ${configuracion.port} `));
