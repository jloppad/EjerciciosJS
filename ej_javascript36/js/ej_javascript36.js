function main() {
    const camposAComprobar = 4;
    const enviar = document.querySelector('#enviar');
    const formulario = document.querySelector('#formu');

    const nombre = formulario.querySelector("#nombre");
    const alias = formulario.querySelector("#alias");
    const contrasenia = formulario.querySelector("#contrasenia");
    const repcontrasenia = formulario.querySelector("#repcontrasenia");

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

    let idTable = "tableafi";
    let arrayIdChecks = ["musica","cine","lectura","informatica","television","videojuegos"];
    let arrayTextoChecks = ["Música","Cine","Lectura","Informática","Televisión","Videojuegos"];

    let textoSelect = crearSelect(idSelect, idOpciones, textoOpciones, textoOpcional);
    let textoCheck = crearChecks(idTable, arrayIdChecks, arrayTextoChecks);

    escribirSegunID("anionac",textoSelect);
    const select = formulario.querySelector("#Anionacimiento");
    escribirSegunID("checksafi",textoCheck);
    
    let correcto = [];

    let arrayPropiedades = ["nombre", "contrasenia","año"]; 

    nombre.addEventListener("blur", function () {
        correcto[0] = comprobar(nombre.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        ponerClase(correcto[0], nombre);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    alias.addEventListener("blur", function () {
        correcto[1] = comprobar(alias.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        ponerClase(correcto[1], alias);
        comprobarEnvio(enviar, correcto, camposAComprobar);
        if (buscarCookie(alias.value)) {
            let cookie = consultarCookie(alias.value);
            let nombreCookie = consultarDatoCookie(cookie, "nombre");
            let contraseñaCookie = consultarDatoCookie(cookie, "contrasenia");
            let añoCookie = consultarDatoCookie(cookie, "año");
            nombre.value = nombreCookie;
            contrasenia.value = contraseñaCookie;
            select.selectedIndex = añoCookie;
        }
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
        let arrayValores = [nombre.value, contrasenia.value, select.selectedIndex];
        crearCookie(alias.value, arrayPropiedades, arrayValores);
    });

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