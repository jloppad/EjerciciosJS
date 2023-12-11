function main() {
    
    let numeros = [];
    let seleccionados = [];
    let Nguardar = [];
    let Nprimitiva = 0;
    let guardar = document.createElement('button');
    
    guardar.textContent = "Guardar Primitiva";
    guardar.id = "guardar";

    for (var i = 1; i <= 6; i++) {
        Nguardar.push(`N${i}`);
    }

    for (var i = 1; i <= 49; i++) {
        numeros.push(`<input type="button" value="${i}">`);
    }

    let tabla = crearTabla(5, 10, "numeros");
    document.body.appendChild(tabla);
    rellenarTabla('numeros', numeros, "");

    let botones = document.querySelectorAll("table#numeros input[type=button]");
    for (let elemento of botones) {
        elemento.addEventListener("click", function () {
            let numero = event.target.value;
            let boton = event.target;

            if (seleccionados.includes(numero)) {
                boton.classList.remove("seleccionado");
                seleccionados.splice(seleccionados.indexOf(numero));
            } else if (seleccionados.length < 6) {
                boton.classList.add("seleccionado");
                seleccionados.push(numero);
            }

        });
    }

    guardar.addEventListener("click",function () {
       if (seleccionados.length == 6) {
            Nprimitiva++;
            let primitiva = `Primitiva${Nprimitiva}`;
            crearCookie(primitiva, Nguardar, seleccionados);
       }else {
            alert("Selecciona 6 numeros");
       }
    });


    document.body.appendChild(guardar);
}

document.addEventListener("DOMContentLoaded", main);