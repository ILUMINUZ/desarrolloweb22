// Función para generar un número aleatorio entre un rango dado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array de nombres de estudiantes
const nombresEstudiantes = ["Juan", "María", "Carlos", "Laura", "Pedro", "Ana", "Luis", "Sofía", "Diego", "Elena"];

// Generar el array de estudiantes con notas aleatorias y nombres aleatorios
const cantidadEstudiantes = 10;
let estudiantes = [];
let mayorNota = -Infinity;
let menorNota = Infinity;
let sumaNotas = 0;

for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = nombresEstudiantes[generarNumeroAleatorio(0, nombresEstudiantes.length - 1)];
    const nota = generarNumeroAleatorio(20, 100);
    estudiantes.push({ nombre, nota });
    // Calcular la mayor y menor nota dentro del bucle
    if (nota > mayorNota) {
        mayorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
    // Sumar las notas para calcular el promedio
    sumaNotas += nota;
}

// Calcular el promedio fuera del bucle
let promedio = sumaNotas / cantidadEstudiantes;

// Mostrar resultados
console.log("Estudiantes:");
console.log(estudiantes);
console.log("Mayor nota:", mayorNota);
console.log("Menor nota:", menorNota);
console.log("Promedio:", promedio);
