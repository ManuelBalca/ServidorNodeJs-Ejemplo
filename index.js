// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type':'text/html'});
//     res.end('hola :D');
// }).listen(3000);//numero de puerto del servidor




// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)
// console.log('servidor funcionando  cambiando');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola')
})

// app.post('/kinal', (req, res) => {
//     res.send('Hola kinal')
// })

// app.put('/editar/1', (req, res) => {
//     res.send('editando')
// })

// app.delete('/borrar/1', (req, res) => {
//     res.send('eliminando')
// })

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})