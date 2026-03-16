// Definir las constantes
const transporte = 120000;
const alojamiento = 200000;
const alimentacion = 150000;
const personas = 4;

// Definir variables
let total = 0;
let aporteIndividual = 130000;
let sobrante = 0;
let cobroPersonal = 0;

// Cálculos lógicos
total = transporte + alojamiento + alimentacion;
cobroPersonal = total / personas;
sobrante = aporteIndividual - cobroPersonal;

// Mostrar resultados al usuario
alert("Resumen de la Calculadora de Gastos:\n" +
      "\n1. Gasto total del grupo: $" + total +
      "\n2. Valor que corresponde a cada uno: $" + cobroPersonal +
      "\n3. Cada persona entregó: $" + aporteIndividual +
      "\n\nDinero sobrante para cada integrante: $" + sobrante);