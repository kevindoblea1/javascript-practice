//declarar un arreglo.
var frutas = ["limon", "fresa", "aguacate", "manzana"];

//mostrar, en el ejemplo mostraremos el 3
console.log(frutas[2]);

//agregar elementos, esto agrega un elemento al final de array
var addFrutas = frutas.push("naranja");
console.log(frutas[4]);

//eliminar elementos del arreglo
var eliminar = frutas.pop("aguacate");
console.log(frutas.length);

//agregar un elemento al unicio del array
var addFirist = frutas.unshift("toronja");
console.log(frutas[0]);

//eliminar el primer elemento del arreglo
var delFruta = frutas.shift();
console.log(frutas[0]);

//para poder buscar el index de un elemento del array
console.log("+++++++++++++++++++++++++++++++++")
var pos = frutas.indexOf("manzana");
console.log(pos);