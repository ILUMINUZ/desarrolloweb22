// Array para guardar los estudiantes registrados
let estudiantes = []; // Lista para almacenar estudiantes

// Manejo del evento 'submit' para agregar estudiantes a la tabla
$('#registro-estudiantes').on('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Obtener valores de los campos del formulario
    let ci = $('#ci').val(); // Valor del campo CI
    let nombre = $('#nombre').val(); // Valor del campo nombre
    let fecha = $('#fecha').val(); // Valor del campo fecha de nacimiento
    let direccion = $('#direccion').val(); // Valor del campo dirección

    // Crear objeto estudiante
    let estudiante = {
        ci: parseInt(ci), // Asegúrate de convertir a número
        nombre: nombre,
        fecha: fecha,
        direccion: direccion
    };

    // Agregar estudiante al array
    estudiantes.push(estudiante);

    // Crear fila para la tabla
    let fila = `<tr>
                    <td>${ci}</td>
                    <td>${nombre}</td>
                    <td>${fecha}</td>
                    <td>${direccion}</td>
                </tr>`;

    $('#tabla-estudiantes tbody').append(fila); // Agregar la fila a la tabla

    // Limpiar campos del formulario
    $('#ci').val('');
    $('#nombre').val('');
    $('#fecha').val('');
    $('#direccion').val('');
});
