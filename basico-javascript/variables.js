var name = "kevin";

var humano = new Object();

humano.name = "Kevin";
humano.lastName = "alvarenga";
humano.age = 29;
humano.sex = true;
humano.modal = "";

if (humano.sex == true) {
    humano.modal = "Masculino";
} else {
    humano.modal = "Femenino";
}
console.log(humano); //imprime todos los valores dentro del objeto

