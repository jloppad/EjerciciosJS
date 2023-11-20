// Te permite escribir un texto en un elemento del html identificando su id
function escribirSegunID(id, texto) {
    document.querySelector(`#${id}`).innerHTML = texto;
}

// Te permite poner una imagen con un src en un elemento img del html identificando su id
function imagenSegundID(id, srcimagen) {
    document.querySelector(`#${id}`).src = srcimagen;
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

// Retorna un string con el texto necesario para crear varios checkboxs cuadriculados en una tabla
function crearChecks(idTable, arrayIdChecks, arrayTextoChecks) {
    let texto = "";

    if (arrayIdChecks.length == arrayTextoChecks.length) {

        texto += `<table id="${idTable}"><tr>`;

        for (let i = 0; i < arrayTextoChecks.length; i++) {
            if (Math.ceil(arrayTextoChecks.length / 2) == i) {
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

// Crea una cookie con una clave y dos arrays para meter valores segun la propiedad que quieras
// Ej: "clave= Dato:Valor& Dato:Valor"
function crearCookie(clave, arrayDatos, arrayValores) {
    let cookie = "";

    if (arrayDatos.length == arrayValores.length) {
        cookie += `${clave}=`;
        for (let i = 0; i < arrayValores.length; i++) {
            cookie += ` ${arrayDatos[i]}:${arrayValores[i]}`;
            if (arrayValores.length - 1 != i) {
                cookie += "&";
            }
        }
    } else {
        cookie = "Error al crear la cookie tiene que haber el mismo numero de propiedades que de valores";
    }

    document.cookie = cookie;
}

// Retorna un booleano si la clave existe en la cookie
function buscarCookie(clave) {
    let buscar = clave + "=";
    if (document.cookie.length > 0) {
        i = document.cookie.indexOf(buscar);
        if (i != -1) {
            return true;
        }
    }
    return false;
}

// Retorna los datos de la cookie buscada  
function consultarCookie(clave) {
    let buscar = clave + "=";
    let i = document.cookie.indexOf(buscar);
    i += buscar.length;
    let j = document.cookie.indexOf(";", i);
    if (j == -1) {
        j = document.cookie.length;
    }
    return document.cookie.substring(i, j);
}

// Retorna el valor del dato buscado de una cookie concreta (seria un string puedes sacarlo facilmente con la funcion consultarCookie)
function consultarDatoCookie(cookie, dato) {
    let datos = cookie.split("& ");
    let valor;
    let buscar = `${dato}:`;
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].includes(buscar)) { 
            valor = datos[i].split(":");
        }
    }
    return valor[1];
}