const in1 = document.querySelector('#calculo1');
const in2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const parra = document.querySelector('#result');

function btnOnClick() {
  const sum = Number(in1.value) + Number(in2.value);
  parra.innerText = "Resultado: " + sum;
}