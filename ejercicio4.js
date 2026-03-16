// Definir las constantes
const nota1 = 4.5;
const nota2 = 3.8;
const nota3 = 2.9;
const nota4 = 4.0;

// Definir variables
let sumaNotas = 0;
let promedio = 0;
let resultadoOperacion = 0;

// Cálculos lógicos
sumaNotas = nota1 + nota2 + nota3 + nota4;
promedio = sumaNotas / 4;
resultadoOperacion = ((nota1 + nota2) * (nota3 + nota4)) / 2;

// Mostrar resultados al usuario
alert("Resumen de Estadísticas de Calificaciones:\n" + "\n1. Suma total de las 4 notas: " + sumaNotas + "\n2. Promedio del aprendiz: " + promedio.toFixed(2) + "\n3. Resultado de la operación especial: " + resultadoOperacion.toFixed(2));
