var frutas = ["Fresa", "Limon", "Aguacate", "Banano"];

for (let i=0; i<=frutas.length; i++) {
console.log(frutas[i]); 
}


var numeros = [];
for (let i=0; i<=19; i++) {
    var num = numeros.push(i+1);
}
for (let i=0; i<=numeros.length; i++) {
    console.log(numeros[i]);
}

for (let key in frutas){
    console.log(key, frutas[key]);
}
for (let key in frutas){
    console.log(key, frutas[key]);
}
