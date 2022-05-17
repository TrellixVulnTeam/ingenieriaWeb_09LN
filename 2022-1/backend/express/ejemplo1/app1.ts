const express = require('express')
const app = express()
const puerto= 3001

app.get('/', (req:any, res:any) => {
  res.send('Hola Mundo')
})

app.listen(puerto, () => {
  console.log(`Example app listening on port ${puerto}`)
})
