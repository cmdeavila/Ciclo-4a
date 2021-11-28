/* importando o requiriendo el archivo operaciones con la función requiere(), como argumento se coloca la ruta donde está ubicado el archivo
*/

// const operaciones = require('./operaciones.js')

// console.log(operaciones)

// console.log(operaciones.sum(8,6));
// console.log(operaciones.restar(8,6));
// console.log(operaciones.multiplicar(8,6));
// console.log(operaciones.dividir(8,0));
// console.log(operaciones.dividir(8,6));


const http = require('http');  //Este modulo permite crear el servidor web

const handleServer = (function(req, res){
    //res.writeHead(200, {'Content-type': 'text/html'});
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('Bienvenidos a ciclo 4a.  ');
    res.end();
})

//http.createServer(handleServer).listen(5000);

const server = http.createServer(handleServer) // El metodo createserver me retorna un objeto llamado server

server.listen(5000, function(){
    console.log('Servidor en puerto 5000')
})