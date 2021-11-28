const operaciones = {};  //Creamos un objeto

function sumar(n1, n2){
    return n1 + n2;
}
function restar(n1, n2){
    return n1 - n2;
}
function multiplicar(n1, n2){
    return n1 * n2;
}
function dividir(n1, n2){
    if (n2 == 0){
        console.log("División por cero... Error!");
    } else{
        return n1 / n2;
    }
 
}
// operaciones.sum = sumar;
// operaciones.restar = restar;
// operaciones.multiplicar = multiplicar;
// operaciones.dividir = dividir;
// // ahora para exportar las propiedades de este objeto

// module.exports = operaciones;

function ciclo4(name){
    console.log('Bienvenido ', name, ' al ciclo 4a');
}

module.exports = ciclo4;

// exports.sum = sumar;
// exports.restar = restar;
// exports.multiplicar = multiplicar;
// exports.dividir = dividir;

