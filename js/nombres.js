/*// Arreglo de nombres
const nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Ana', 'Pedro', 'Sofía', 'Diego', 'Elena', 'Luis', 'Alejandro', 'Andrea', 'Javier', 'Paula', 'Lucas', 'Claudia', 'Miguel', 'Valentina', 'Ricardo', 'Isabella'];

// Arreglo de apellidos
const apellidos = ['Gómez', 'Martínez', 'Pérez', 'López', 'González', 'Rodríguez', 'Fernández', 'Sánchez', 'Ramírez', 'Torres', 'Vázquez', 'Díaz', 'Alonso', 'Muñoz', 'Castro', 'Ruiz', 'Jiménez', 'Hernández', 'Gutiérrez', 'Flores'];

// Función para obtener un elemento aleatorio de un arreglo
function elementoAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Función para crear un nuevo arreglo con elementos aleatorios
function crearArrayAleatorio(nombres, apellidos, cantidad) {
    const nombresAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        const nombreAleatorio = elementoAleatorio(nombres);
        const apellidoAleatorio = elementoAleatorio(apellidos);
        nombresAleatorios.push(`${nombreAleatorio} ${apellidoAleatorio}`);
    }
    return nombresAleatorios;
}

// Crear un nuevo arreglo con 10 elementos aleatorios
const cantidadElementos =10;
const nombresAleatorios = crearArrayAleatorio(nombres, apellidos, cantidadElementos);

console.log("Nombres aleatorios combinados:");
console.log(nombresAleatorios);
*/
const NELEMENTOS=10;
// Arreglo de nombres
nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Ana', 'Pedro', 'Sofía', 'Diego', 'Elena', 'Luis', 'Alejandro', 'Andrea', 'Javier', 'Paula', 'Lucas', 'Claudia', 'Miguel', 'Valentina', 'Ricardo', 'Isabella'];

// Arreglo de apellidos
apellidos = ['Gómez', 'Martínez', 'Pérez', 'López', 'González', 'Rodríguez', 'Fernández', 'Sánchez', 'Ramírez', 'Torres', 'Vázquez', 'Díaz', 'Alonso', 'Muñoz', 'Castro', 'Ruiz', 'Jiménez', 'Hernández', 'Gutiérrez', 'Flores'];

let nomape=[];
function generarNomApe(){
    let nomal, apeal;
    for(let i=0;i<NELEMENTOS; i++){
        nomal=nombres[Math.floor(Math.random()*nombres.length-1)];
        apeal=apellidos[Math.floor(Math.random()*apellidos.length)];
        nomape.push(nomal+ " " +apeal);
    }
}
function imprimir(){
    nomape.forEach(persona=>{
        console.log(persona + "\n");
    });
}
generarNomApe();
imprimir();