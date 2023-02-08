const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const parrafo = document.getElementById('resultado');


function btnOnClick () {
    let suma = Number(input1.value) + Number(input2.value);
    console.log(suma);
}