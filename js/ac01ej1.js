function obtenerNombreNavegador() {
    const navegador = navigator.userAgent; // Obtiene el user agent del navegador
    let nombreNavegador = "desconocido";

    if (navegador.includes("Chrome")) {
        nombreNavegador = "Google Chrome";
    } else if (navegador.includes("Firefox")) {
        nombreNavegador = "Mozilla Firefox";
    } else if (navegador.includes("Safari") && !navegador.includes("Chrome")) {
        nombreNavegador = "Safari";
    } else if (navegador.includes("Edge")) {
        nombreNavegador = "Microsoft Edge";
    } else if (navegador.includes("MSIE") || navegador.includes("Trident")) {
        nombreNavegador = "Internet Explorer";
    }

    return nombreNavegador;
}

function mostrarBienvenida() {
    const nombreNavegador = obtenerNombreNavegador();
    const mensajeBienvenida = `¡Bienvenido! Estás ejecutando este código en ${nombreNavegador}.`;
    document.getElementById("mensaje").innerText = mensajeBienvenida; // Muestra el mensaje
}
