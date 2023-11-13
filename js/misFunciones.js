// Te permite escribir un texto en un elemento del html identificando su id
function escribirSegunID(id, texto) {
    document.querySelector(`#${id}`).innerHTML = texto;
}

// Retorna un string con el texto necesario para crear un select relleno
function crearSelect(idSelect, arrayIdOpciones, arrayTextoOpciones, textoOpcional = undefined) {
    let texto = "";

    if (arrayIdOpciones.length == arrayTextoOpciones.length) {
        
        if (textoOpcional != undefined) {
            texto += textoOpcional;
        }
        
        texto += `<select id="${idSelect}">`;

        for (let i = 0; i < arrayTextoOpciones.length; i++) {
            texto += `<option id="${arrayIdOpciones[i]}">${arrayTextoOpciones[i]}</option>`;
        }

        texto += "</select>";

    } else {
        texto = "Error al crear el select (Debe haber un id por cada option)";
    }
    
    return texto;
}

// Retorna un string con el texto necesario para crear varios checkboxs cuadriculados
function crearChecks(idTable, arrayIdChecks, arrayTextoChecks) {
    let texto = "";

    if (arrayIdChecks.length == arrayTextoChecks.length) {
        
        texto += `<table id="${idTable}"><tr>`;

        for (let i = 0; i < arrayTextoChecks.length; i++) {
            if (Math.ceil(arrayTextoChecks.length/2) == i){
                texto += "</tr><tr>";
            }
            texto += `<td><input type="checkbox" id="${arrayIdChecks[i]}"> ${arrayTextoChecks[i]}</td>`;
        }

        texto += "</tr></table>";

    } else {
        texto = "Error al crear los checksbox (Debe haber un id por cada checkbox)";
    }
    
    return texto;
}