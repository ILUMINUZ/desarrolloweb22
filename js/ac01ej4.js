function analizarFrase() {
    const frase = document.getElementById("frase").value.toLowerCase(); // Obtiene la frase y la convierte a minúsculas

    // Cuenta cuántas veces aparece la letra 'o'
    const cantidadO = (frase.match(/o/g) || []).length;

    // Vocales a contar
    const vocales = ["a", "e", "i", "o", "u"];

    // Objeto para almacenar el conteo de cada vocal
    const conteoVocales = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };

    // Contar cada vocal en la frase
    for (const vocal of vocales) {
        conteoVocales[vocal] = (frase.match(new RegExp(vocal, "g")) || []).length;
    }

    // Construir el resultado
    const resultado = `
        La letra 'o' aparece ${cantidadO} vez/veces.<br>
        Las vocales que aparecen son: ${
            vocales.filter(vocal => conteoVocales[vocal] > 0).join(", ")
        }.<br>
        Conteo de cada vocal:<br>
        a: ${conteoVocales["a"]}, 
        e: ${conteoVocales["e"]}, 
        i: ${conteoVocales["i"]}, 
        o: ${conteoVocales["o"]}, 
        u: ${conteoVocales["u"]}.
    `;

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = resultado;

    return false; // Previene el envío del formulario para que se muestre el resultado en la página
}
