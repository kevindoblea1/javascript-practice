//flujo normal de declaracion de variables con inicializacion separada
var myName;
myname = "Kevin";

//declaracion de variable con inicializacion
var otherName = "kevin";

//problema de llamar variable antes de inicializarla "hoisting"
console.log(apellido);
var apellido = "Alvarenga";


//el hoisting no afecta las funciones
hola();
function hola() {
    console.log("Hola" + " " + nombre);
}
//sin embargo una variable declarada despues de una funcion si genera goisting
var nombre = "Kevin";