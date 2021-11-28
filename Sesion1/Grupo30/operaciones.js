const operaciones = {};// creamos un objeto

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
        console.log("División por cero.. .Error!")
    }else{
        return n1 / n2;
    }
    
}

// exports.sum = sumar;
// exports.restar = restar;
// exports.multiplicar = multiplicar;
// exports.dividir = dividir;

// operaciones.sum = sumar;
// operaciones.restar = restar;
// operaciones.multiplicar = multiplicar;
// operaciones.dividir = dividir;

module.exports = operaciones

// function ciclo4(name){
//     console.log('Bienvenido ', name, ' al ciclo 4a');
// }

// operaciones.ciclo4 = ciclo4;
// module.exports = operaciones;