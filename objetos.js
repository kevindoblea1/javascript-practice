var usuario = {
    nombre: "Kevin",
    edad: 29,
    correo: "kevin.alvarenga@avon.com",
    password: "Avon1234",
    resumen: function(){
        console.log("Usuario: ", this.nombre, " correo: ", this.correo);   
    }
}
usuario.resumen();

//another angle for this paradigm
console.log("____________________________________________")
var myCar = {
    Brand: "Honda",
    model: "CRV",
    year: 2011,
    carDetail: function () {
        console.log("Car: ", this.model, this.year);
    }
}
myCar.carDetail();