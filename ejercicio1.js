// Constantes
const TRANSPORTE = 120000;
const ALOJAMIENTO = 200000;
const ALIMENTACION = 150000;
const PERSONAS = 4;

// Variables
let total = TRANSPORTE + ALOJAMIENTO + ALIMENTACION;
let porPersona = total / PERSONAS;

// Cada persona entrega dinero
let aporte = parseInt(prompt("Cada persona entrega cuánto dinero? (ej: 130000)"));

let totalRecaudado = aporte * PERSONAS;
let sobrante = totalRecaudado - total;

// Mostrar resultados
alert("Total del viaje: $" + total + "\n" +
      "Cada persona debe pagar: $" + porPersona + "\n" +
      "Total recaudado: $" + totalRecaudado + "\n" +
      "Sobrante: $" + sobrante);