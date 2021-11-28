const express = require('express'); // framework me permite crear servidore
const colors = require('colors');

const app = express();

app.get('/', function(req, res){
    res.send('<h1>Bienvenidos a Ciclo 4a.</h1>  ')
})

app.get('/contacto', (req,res) =>{
    res.send('formulario contacto')

} )

app.listen(5000, function(){
    console.log('Servidor en puerto 5000'.red)
})