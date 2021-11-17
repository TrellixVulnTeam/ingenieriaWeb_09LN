const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const ArtistasLista=require('./getArtistas');
const Insertar=require('./postArtistas');

const configuracion={
    hostname: "127.0.0.1",
    port: 3001,
}

//https://node-postgres.com/


app.use(cors());
// create application/json parser
app.use(bodyParser.json());


//GET
//app.get('/Artistas',ArtistasLista.GetArtistas);
app.post('/InsertarArtistas',bodyParser.json(),Insertar.PostArtistas);

  app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://${configuracion.hostname}:${configuracion.port}`)
  })
  
