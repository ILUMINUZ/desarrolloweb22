/*
Descripcion:Ejercicio del color y suma.
Desarrollador:Edward Anthony Yabeta Yoshida
Fecha:2024-05-15
Cambios:Ningunos
*/
// Solicitar al usuario que ingrese un color
var color = prompt("Ingrese un color:");

// Imprimir el color por consola
console.log("El color es: " + color);

// Solicitar al usuario que ingrese dos números
var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Calcular la suma de los números ingresados
var suma = num1 + num2;

// Imprimir la suma por consola con un mensaje personalizado
console.log("La suma de " + num1 + " + " + num2 + " = " + suma);