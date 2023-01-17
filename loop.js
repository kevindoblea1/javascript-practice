var estudiante = ["Kevin", "Ruth", "Sergio", "Maria"];

//for sensillo
function saludarEstudiante(estudiante) {
    console.log("Hola ", estudiante, " bienvenido a clase")
}

for(var i=0; i<estudiante.length; i++) {
    saludarEstudiante(estudiante[i]);
}

//for para arrays
for (var temp of estudiante){
    saludarEstudiante(temp);
}

//while
function saludo(estudiante){
    console.log("Hi hi ", estudiante, " have a nice day!")
}

while(estudiante.length > 0) {
    var temp = estudiante.shift();
    saludo(estudiante);
}