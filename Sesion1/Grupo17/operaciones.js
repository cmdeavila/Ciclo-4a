const operaciones = {} // creación de objeto

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
        console.log("División por cero.... Error!");
    }else {
        return n1 / n2;
    }
}
//exportmos las propiedades del objeto
// exports.sum = sumar;
// exports.restar = restar;
// exports.multiplicar = multiplicar;
// exports.dividir = dividir;
 // cuando utilizo export estoy agreganddo una nueva propiedad a u objeto, que luego puedo reutilizar

// operaciones.sum = sumar;
// operaciones.restar = restar;
// operaciones.multiplicar = multiplicar;
// operaciones.dividir = dividir;

// module.exports = operaciones;

// function ciclo4(name){
//     console.log("Bienvenido ", name, " al ciclo 4a.");
// }

// module.exports = ciclo4;

//Me permite exportar objetos, funciones, variables y cualquier dato js

