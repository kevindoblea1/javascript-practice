//coercion inplicita del navegador

//El navegador va a interpretar todo como un string generando una concatenacion
var a = 4 + "7";
typeof a;
console.log(a);
//En este caso al navegador le hace mas sentido que lo que queremos es operar en numeros 
//y nos regresa el resultado en numeros
var b = 4 * "7";
typeof b;
console.log(b);


//coercion explicita del navegador

//operadores similares a vachar o int32, convierte los datos de un tipo a otro.
var a = 20;
var b = a + "";
typeof b;
var c = String(a);
typeof c;
console.log(c);

//forma correcta de operarlo 
Number("47") // 'numerico'
String(51) // 'cadena de texto'
Boolean(1) // 'boleano'