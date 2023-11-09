// Te permite escribir un texto en un elemento del html identificando su id
function escribirSegunID(id, texto) {
    document.querySelector(`#${id}`).innerHTML = texto;
}

// Retorna un string con el texto necesario para crear un select
function crearSelect(idSelect, numeroOpciones, idOpciones, textoOpciones, textoOpcional = undefined) {
    let texto = "";

    if (numeroOpciones == idOpciones.length && numeroOpciones == textoOpciones.length) {
        
        if (textoOpcional != undefined) {
            texto += textoOpcional;
        }
        
        texto += `<select id="${idSelect}">`;

        for (let i = 0; i < numeroOpciones; i++) {
            texto += `<option id="${idOpciones[i]}">${textoOpciones[i]}</option>`;
        }

        texto += "</select>";

    } else {
        texto = "Error al crear el select (Debe haber un id por cada option)";
    }
    
    return texto;
}