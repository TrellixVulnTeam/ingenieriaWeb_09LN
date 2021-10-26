const express = require('express');
const app = express();
const port = 3000;
const configuracion={
    server:"127.0.0.1",
    port:6001
};
 //CRUD: create (post), read (get), update (put), delete (delete)
app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(configuracion, () => {
  console.log(`Example app listening at http://${configuracion.server}:${configuracion.port}`)
})