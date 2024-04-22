// Función para obtener un elemento aleatorio de un array
function elementoAleatorio(array) {
    const indice = Math.floor(Math.random() * array.length); // Genera un índice aleatorio
    return array[indice]; // Retorna el elemento correspondiente
}

// Función para formatear nombres y apellidos
function formatearNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase(); // Convierte la primera letra a mayúscula y el resto a minúscula
}

// Arrays de nombres y apellidos
const nombres = ["ana", "juan", "carla", "pedro", "luisa"];
const apellidos = ["perez", "rodriguez", "gomez", "martinez", "lopez"];

// Array para almacenar los nombres combinados
const combinaciones = [];

for (let i = 0; i < 10; i++) { // Generar 10 combinaciones
    const nombre = elementoAleatorio(nombres); // Obtiene un nombre aleatorio
    const apellido = elementoAleatorio(apellidos); // Obtiene un apellido aleatorio

    // Formatea el nombre completo
    const nombreCompleto = formatearNombre(nombre) + " " + formatearNombre(apellido);

    combinaciones.push(nombreCompleto); // Agrega la combinación al array
}

// Imprime el array con las combinaciones generadas
console.log("Nombres combinados aleatoriamente:", combinaciones);
