// Función para generar una nota aleatoria entre 20 y 100
function generarNotaAleatoria() {
    return Math.floor(Math.random() * (100 - 20 + 1)) + 20;
}

// Arreglo de nombres
let nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Ana', 'Pedro', 'Sofía', 'Diego', 'Elena', 'Luis'];

// Generar notas aleatorias para cada nombre y almacenarlas en un arreglo
let notas = nombres.map(nombre => generarNotaAleatoria());

// Calcular la nota más alta
let notaMaxima = Math.max(...notas);

// Calcular la nota más baja
let notaMinima = Math.min(...notas);

// Calcular el promedio de las notas
let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;

// Mostrar la lista de notas
console.log("Lista de notas:");
nombres.forEach((nombre, index) => {
    console.log(`${nombre}: ${notas[index]}`);
});

console.log("\nResumen:");
console.log("Nota más alta:", notaMaxima);
console.log("Nota más baja:", notaMinima);
console.log("Promedio de notas:", promedio);
