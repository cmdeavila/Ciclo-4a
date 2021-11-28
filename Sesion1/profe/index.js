//importamos o requerimos el archivo con la función require(), como argumento colocamos el archivo donde está ubicado, y todo lo que nos traiga el modulo es almacenado en la constnte operaciones
// const operaciones = require('./operaciones.js')

// console.log(operaciones)

// console.log(operaciones.sum(8,6))
// console.log(operaciones.restar(8,6))
// console.log(operaciones.multiplicar(8,6))
// console.log(operaciones.dividir(8,0))
// console.log(operaciones.dividir(8,6))

//Esto quiere decir que dentro del modulo operaciones llama a cada función
// en este momento tenemos nuestro modulo, pero son funciones simplemente, no estoy
// exportando nada para que otros arhivos lo utilicen, en node js exportamos utilizando un
// objeto de javascript, al final este objeto es el que utilizará mis otros archivos
//nos vamos para el archvio operaciones y ahi exportamos las funciones

//const http = require('http');  //este modulo permite crear un servidor web 

//Cuado creo un servidor este será capaz de recibir y responder peticiones por eso utilizamos esos dos parámetros
// http.createServer(function (req, res) {
//     //res.writeHead(200, {'Content-type': 'text/html' });
    
//     res.writeHead(404, {'Content-type': 'text/plain' });

//     //writehead, Es para decirle que voy a escribir una cabecera, le daré más información al navegador, le dire que el tipo de respuesta es de 200, luego crearé un objeto y le daré el tipo de contenido que es un text/html
//     res.write('Bienvenidos a Ciclo 4a.  Desarrollo de Aplicaciones Web');
//     res.end(); //termino la respuesta para que pueda recibir peticiones de otros usuarios
// }).listen(5000);

//listen() nos dice en que puerto nos va a escuchar el servidor

// const http = require('http');

// const handleServer = (function (req, res) {
//     res.writeHead(200, {'Content-type': 'text/html' });
//     res.write('<h1>Bienvenidos a Ciclo 4a.  Desarrollo de Aplicaciones Web</h1>');
//     res.end();
// });

// //http.createServer(handleServer).listen(5000);
// // De esta forma llamamos a la función dentro del createserver y lo escuchamos por el puerto 5000, es una forma más abreviada.


// const server = http.createServer(handleServer) // el metodo create server me retorna un objeto llamado server 
// server.listen(5000, function(){
//     console.log('Servidor en puerto 5000');
// });

//Es lo mismo que teniamos antes, pero de una manera ordenada, en la linea 46 el servidor que se ha creado lo voy a ser escuchar en el puerto 5000 y cuando empiece a escuchar me muestre un mensaje por consola. 

const colors = require('colors'); //importamos colors
const express = require('express'); //framework que me permite crear servidores
const app = express(); // el servidor que crea me lo guarde en la constante server

app.get('/',  function (req, res) {
        res.send('<h1>Bienvenidos a Ciclo 4a con express</h1>');
        res.end();
});
// seguira escuchando por el puerto 5000 y enviara un mensaje por consola de color rojo
app.listen(5000, function(){
    console.log('Servidor en puerto 5000'.red);
});

app.get('/about', (req, res) =>{
    res.send('Acerca de.');
} );

app.get('/contact', (req, res) =>{
    res.send('Contactenos');
} );