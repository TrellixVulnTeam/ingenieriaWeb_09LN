const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((request:any, response:any)=> {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  let objeto={"nombre":"peptito","edad":2};
  response.end("Prueba");
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});