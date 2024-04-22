document.addEventListener("DOMContentLoaded", function() { // Asegura que el JS se ejecute cuando el DOM esté listo
    const form = document.querySelector("form"); // Obtiene el formulario

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previene el envío automático del formulario

        const usuario = document.getElementById("usuario").value; // Obtiene el usuario ingresado
        const contrasena = document.getElementById("contrasena").value; // Obtiene la contraseña ingresada

        const usuariosValidos = ["juan", "pedro", "maria", "raul"]; // Lista de usuarios válidos
        const contrasenaValida = "D153n0W3b2"; // Contraseña válida

        const resultado = document.getElementById("resultado"); // Elemento para mostrar mensajes

        if (usuariosValidos.includes(usuario.toLowerCase()) && contrasena === contrasenaValida) {
            resultado.innerText = "Inicio de sesión exitoso."; // Mensaje si la validación es correcta
        } else {
            resultado.innerText = "Usuario o contraseña incorrectos. Inténtalo de nuevo."; // Mensaje si es incorrecta
        }
    });
});
