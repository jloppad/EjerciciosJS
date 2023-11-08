function main() {
    const enviar = document.querySelector('#enviar');
    const formulario = document.querySelector('#formu');

    const nombre = formulario.querySelector("#nombre");
    const alias = formulario.querySelector("#alias");
    const contrasenia = formulario.querySelector("#contrasenia");
    const repcontrasenia = formulario.querySelector("#repcontrasenia");


    
    enviar.addEventListener('click', function () {
        let correcto = [];
        let envia = true;

        correcto[0] = comprobar(nombre.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        correcto[1] = comprobar(alias.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        correcto[2] = comprobar(contrasenia.value, ".");
        if (contrasenia.value == repcontrasenia.value) {
            correcto[3] = comprobar(repcontrasenia.value, ".");
        }else {
            correcto[3] = false;
        }

        ponerClase(correcto[0], nombre);
        ponerClase(correcto[1], alias);
        ponerClase(correcto[2], contrasenia);
        ponerClase(correcto[3], repcontrasenia);

        for (let i = 0; i < correcto.length; i++) {
            if (!correcto[i]) {
                envia = false;
            }
            
        }
  
        if (envia) {
            formulario.submit();
        }

    });

    let anio = [];
    let anioActual = 2023;
    let primerAnio = 1965;

    for (let i = primerAnio; i <= anioActual; i++) {
        anio.push(i);
    }

    let textoOpcional = "Año nacimineto: ";
    let numeroOpciones = 1 + anioActual - primerAnio;
    let idOpciones = anio;
    let textoOpciones = anio;
    let idSelect = "Anionacimiento";

    let textoSelect = crearSelect(idSelect, numeroOpciones, idOpciones, textoOpciones, textoOpcional);
    escribirSegunID("anionac",textoSelect);

}

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

function escribirSegunID(id, texto) {
    document.querySelector(`#${id}`).innerHTML = texto;
}

function ponerClase(correcto, campo) {
    campo.classList.remove("correcto", "erroneo");
    if (!correcto) {
        campo.classList.add("erroneo");
        campo.value = "";
        campo.placeholder = "dato erroneo";
    } else{
        campo.classList.add("correcto");
    }
}

function comprobar(campo, expresion) {
    let clase = true;

    if(campo.match(expresion)==null){
        clase = false;
    }

    return clase;
}

document.addEventListener("DOMContentLoaded", main);