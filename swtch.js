import { createInterface } from "redline";
var n1 = 0;
var n2 = 0;
let interfazCaptura = createInterface ({
    input: process.stdin,
    output: process.stdout
});
console.log("Calculadora en java script");
console.log("Seleccione la opcion introduciendo el numero correspondiente: ")
function selectMenu(){
interfazCaptura.question("1 suma, 2 Resta, 3 Multiplicacion, 4")
}
selectMenu();
function suma(n1,n2 ) {

}
function Resta(n1,n2 ) {

}
function multi(n1,n2 ) {

}
function division(n1,n2 ) {

}

