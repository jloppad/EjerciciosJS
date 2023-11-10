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

        if (correcto.includes(false)) {
            envia = false;
        }
  
        if (envia) {
            formulario.submit();
        }

    });

    let anio = [];
    let anioActual = new Date().getFullYear();
    let primerAnio = 1965;

    for (let i = primerAnio; i <= anioActual; i++) {
        anio.push(i);
    }

    let textoOpcional = "Año nacimineto: ";
    let idOpciones = anio;
    let textoOpciones = anio;
    let idSelect = "Anionacimiento";

    let textoSelect = crearSelect(idSelect, idOpciones, textoOpciones, textoOpcional);
    escribirSegunID("anionac",textoSelect);

}
/*
    Le pone una clase erroneo (se indica que es un dato erroneo) o correcto al campo pasado 
*/
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
    let correcto = true;

    if(campo.match(expresion)==null){
        correcto = false;
    }

    return correcto;
}

document.addEventListener("DOMContentLoaded", main);