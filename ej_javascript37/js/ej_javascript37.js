function main() {
    const enviar = document.querySelector('#registrar');
    const entrar = document.querySelector('#entrar');
    const formulario = document.querySelector('#formu');

    const nombre = formulario.querySelector("#nombre");
    const contrasenia = formulario.querySelector("#contrasenia");

    let arrayPropiedades = ["contrasenia"];

    enviar.addEventListener("click", function () {
        let arrayValores = [contrasenia.value];
        crearCookie(nombre.value, arrayPropiedades, arrayValores);
    });

    entrar.addEventListener("click", function () {
        if (buscarCookie(nombre.value)) {
            let cookie = consultarCookie(nombre.value);
            if (contrasenia.value == consultarDatoCookie(cookie, "contrasenia")) {
                location.href = "../../ej_javascript31/index.html";
            } else {
                window.alert("Contraseña incorrecta");
            }
        } else {
            window.alert("Usuario no registrado");
        }

    });

}

document.addEventListener("DOMContentLoaded", main);