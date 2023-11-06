function main() {
    const enviar = document.querySelector('#enviar');
    const formulario = document.querySelector('#formu');

    const nombre = formulario.querySelector("#nombre");
    const direccion = formulario.querySelector("#direccion");
    const telefono = formulario.querySelector("#telefono");
    const dni = formulario.querySelector("#dni");
    const correoelectronico = formulario.querySelector("#correoelectronico");
    const localidad = formulario.querySelector("#localidad");

    
    enviar.addEventListener('click', function () {
        let correcto = [];
        let envia = true;

        correcto[0] = comprobar(nombre.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
        correcto[1] = comprobar(direccion.value, ".");
        correcto[2] = comprobar(telefono.value, "[0-9]{9}");
        correcto[3] = comprobar(dni.value, "[0-9]{8}[A-Z]{1}");
        correcto[4] = comprobar(correoelectronico.value, /^[a-z][\w\.]*@[\w\.]+\.[a-z]{2,3}$/);
        correcto[5] = comprobar(localidad.value, "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");

        ponerClase(correcto[0], nombre);
        ponerClase(correcto[1], direccion);
        ponerClase(correcto[2], telefono);
        ponerClase(correcto[3], dni);
        ponerClase(correcto[4], correoelectronico);
        ponerClase(correcto[5], localidad);

        for (let i = 0; i < correcto.length; i++) {
            if (!correcto[i]) {
                envia = false;
            }
            
        }
  
        if (envia) {
            formulario.submit();
        }

    });

    // COMPROBAR LOS CAMPOS UNO A UNO (PUEDE SER COMPROBAMDO EL FOCO) Y LUEGO TODOS (COMO YA ESTA)

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