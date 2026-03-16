// Definir las constantes
const produccionPorHora = 250;
const horasTrabajadas = 8;
const capacidadCaja = 12;

// Definir variables
let totalPiezas = 0;
let cajasLlenas = 0;
let piezasSobrantes = 0;

// operaciones
totalPiezas = produccionPorHora * horasTrabajadas;
cajasLlenas = totalPiezas / capacidadCaja;
piezasSobrantes = totalPiezas % capacidadCaja;

// Mostrar resultados al usuario
alert("Resumen de Producción de la Fábrica:\n" + "\n1. Total de piezas fabricadas: " + totalPiezas + "\n2. Cantidad de cajas de 12 piezas llenas: " + cajasLlenas + "\n3. Cantidad de piezas que quedan sueltas: " + piezasSobrantes);
