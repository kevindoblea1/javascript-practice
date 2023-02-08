const in1 = document.querySelector('#calculo1');
const in2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const parrafo = document.querySelector('#result');
const form = document.querySelector('#form');
//escuchar eventos 
btn.addEventListener('click', sumarInputValues)

function sumarInputValues() {
  const sum = Number(in1.value) + Number(in2.value);
  parrafo.innerText = "Resultado: " + sum;
}

