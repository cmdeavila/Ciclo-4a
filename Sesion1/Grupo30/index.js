// importamos o requerimmos el archivo con la función require(), como argumento colocamos el archivo donde está ubicado y todo lo que traiga el modulo es almaccenado en la constante operaciones

//const operaciones = require('./operaciones.js')
//console.log(operaciones)

// console.log(operaciones.sum(8,6));
// console.log(operaciones.restar(8,6));
// console.log(operaciones.multiplicar(8,6));
// console.log(operaciones.dividir(8,0));
// console.log(operaciones.dividir(8,6));
//console.log(operaciones.ciclo4('Felipe'));


const http = require('http'); // Este modulo nos permite crear un servidor web
//1.
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     //res.writeHead(404, {'Content-type': 'text/plain'});
//     res.write('<h1> Bienveniddos a Ciclo 4a. </h1>  ');
//     res.end();

// }).listen(5000);

//2.
const handleServer = (function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1> Bienveniddos a Ciclo 4a. </h1>  ');
    res.end();

});

//http.createServer(handleServer).listen(5000);

//3.

const server = http.createServer(handleServer) // el metodo createserver me retorna un objeto llamado server
server.listen(5000, function(){
    console.log('Servidor en puerto 5000');
})


