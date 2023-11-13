function main() {
    const enviar = document.querySelector('#enviar');
    const formulario = document.querySelector('#formu');

    const nombre = formulario.querySelector("#nombre");
    const alias = formulario.querySelector("#alias");
    const contrasenia = formulario.querySelector("#contrasenia");
    const repcontrasenia = formulario.querySelector("#repcontrasenia");


    const camposAComprobar = 4;
    let correcto = [];
    let datos = {};

    nombre.addEventListener("blur", function () {
        correcto[0] = comprobar(nombre.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        ponerClase(correcto[0], nombre);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    alias.addEventListener("blur", function () {
        correcto[1] = comprobar(alias.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        ponerClase(correcto[1], alias);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    contrasenia.addEventListener("blur", function () {
        correcto[2] = comprobar(contrasenia.value, ".");
        ponerClase(correcto[2], contrasenia);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    repcontrasenia.addEventListener("blur", function () {
        if (contrasenia.value == repcontrasenia.value) {
            correcto[3] = comprobar(repcontrasenia.value, ".");
        } else {
            correcto[3] = false;
        }
        ponerClase(correcto[3], repcontrasenia);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    enviar.addEventListener("click", function () {
        let nuevo = datos.push({
            "nombre": nombre.value,
            "alias": alias.value,
            "contrasenia": contrasenia.value,
            "repcontrasenia": repcontrasenia.value
        });
        console.log(nuevo);
        console.log(datos);
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
    escribirSegunID("anionac", textoSelect);

}

function guardarDatos(datos, nombre, alias, contrasenia, repcontrasenia) {
    datos = ({
        "nombre": nombre,
        "alias": alias,
        "contrasenia": contrasenia,
        "repcontrasenia": repcontrasenia
    });
    console.log(datos);
}

function comprobarEnvio(boton, correcto, camposAComprobar) {
    let envia = false;

    if (correcto.length < camposAComprobar) {
        envia = true;
    } else {

        if (correcto.includes(false)) {
            envia = true;
        }

        boton.disabled = envia;

    }

}

function ponerClase(correcto, campo) {
    campo.classList.remove("correcto", "erroneo");
    if (!correcto) {
        campo.classList.add("erroneo");
        campo.value = "";
        campo.placeholder = "dato erroneo";
    } else {
        campo.classList.add("correcto");
    }
}

function comprobar(campo, expresion) {
    let clase = true;

    if (campo.match(expresion) == null) {
        clase = false;
    }

    return clase;
}

document.addEventListener("DOMContentLoaded", main);