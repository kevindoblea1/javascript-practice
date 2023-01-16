//identificacion de valores falsos.

//el valor cero es tomado como falso.
Boolean(0);

//null, false, undefined NaN es tomado como faslo
Boolean(NaN);

//un string vacio es tomado como falso
Boolean("");


//__________________________________________________________


//identificacion de valores verdaderos

//un valor mayor que cero es tomado como verdadero
Boolean(1)
//los areglos son tomados como verdaderos, aun estando vacios
Boolean([]);
//los objetos tambien son tomados como verdaderos, aun sin tener datos o definicion
Boolean({});
//las funciones son tomadas como verdaderas
Boolean(function(){});
//el valor true es tomado como verdadero
Boolean(true);

//prueba

