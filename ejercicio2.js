//* usamos la constante para los segundps //
const segundos_registrados = 7200;

//* aqui declaramos las variables //
let minutos = segundos_registrados / 60;
let horas = segundos_registrados / 3600;
let dias = segundos_registrados / 86400;

//* mostramos los resultados en la consola //
console.log("resultados de la conversión");
console.log("- minutos: "+ minutos);
console.log("- horas" + horas);
//* utilizamos el .tofixed para cortar los decimales despues de  el numero que  elijamos//
console.log("-dias: "+ dias.toFixed(4))