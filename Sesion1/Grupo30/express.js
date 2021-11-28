//express frameworkk que me permite crear servidores
const express = require('express');
const colors = require('colors');

const app = express();

app.get('/', (req, res) =>{
    res.send('<h1> Bienveniddos a Ciclo 4a. </h1> ')
    res.end()
} )

app.get('/contactos', (req, res) => {
    res.send('Formulario de contacto')

})

app.listen(5000, () => {
    console.log('Servidor en puerto 5000'.red)
})