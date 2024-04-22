// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }

    // Verifica si el número es divisible por algún valor desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Si es divisible, no es primo
        }
    }

    return true; // Si no es divisible por ninguno, es primo
}

// Función para generar un número aleatorio dentro de un rango
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un array de números primos aleatorios
function generarPrimosAleatorios(cantidad, limite) {
    const primos = []; // Array para almacenar los números primos

    while (primos.length < cantidad) {
        const candidato = numeroAleatorio(2, limite); // Genera un número aleatorio entre 2 y el límite

        if (esPrimo(candidato) && !primos.includes(candidato)) { // Verifica si es primo y no está repetido
            primos.push(candidato); // Agrega el número primo al array
        }
    }

    return primos; // Devuelve el array con números primos
}

// Ejemplo de uso
const cantidadDePrimos = 10; // Número de primos a generar
const limite = 110; // Limite máximo para los números aleatorios
const primosAleatorios = generarPrimosAleatorios(cantidadDePrimos, limite);

console.log("Primos generados:", primosAleatorios); // Imprime los números primos generados
