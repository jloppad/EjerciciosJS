
function main() {
    const enviar = document.querySelector('#enviar');
    const formulario = document.querySelector('#formu');

    const nombre = formulario.querySelector("#nombre");
    const direccion = formulario.querySelector("#direccion");
    const telefono = formulario.querySelector("#telefono");
    const dni = formulario.querySelector("#dni");
    const correoelectronico = formulario.querySelector("#correoelectronico");
    const localidad = formulario.querySelector("#localidad");

    const camposAComprobar = 6;
    let correcto = [];

    nombre.addEventListener("blur", function () {
        correcto[0] = comprobar(nombre.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        ponerClase(correcto[0], nombre);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    direccion.addEventListener("blur", function () {
        correcto[1] = comprobar(direccion.value, ".");
        ponerClase(correcto[1], direccion);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    telefono.addEventListener("blur", function () {
        correcto[2] = comprobar(telefono.value, "[0-9]{9}");
        ponerClase(correcto[2], telefono);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    dni.addEventListener("blur", function () {
        correcto[3] = comprobar(dni.value, "[0-9]{8}[A-Z]{1}");
        ponerClase(correcto[3], dni);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    correoelectronico.addEventListener("blur", function () {
        correcto[4] = comprobar(correoelectronico.value, /^[a-z][\w\.]*@[\w\.]+\.[a-z]{2,3}$/);
        ponerClase(correcto[4], correoelectronico);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

    localidad.addEventListener("blur", function () {
        correcto[5] = comprobar(localidad.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        ponerClase(correcto[5], localidad);
        comprobarEnvio(enviar, correcto, camposAComprobar);
    });

}

function comprobarEnvio(bonton, correcto, camposAComprobar) {
    let envia = false;

    if (correcto.length < camposAComprobar) {
        envia = true;
    } else {

        for (let i = 0; i < correcto.length; i++) {
            if (!correcto[i]) {
                envia = true;
            }
        }

        bonton.disabled = envia;

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