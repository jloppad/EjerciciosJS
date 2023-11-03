let memoria = null;

function main() {

    document.querySelector('table').addEventListener('click', function (event) {
        const boton = event.target;
        const display = document.getElementById('display');

        if (boton.classList.contains('numero')) {
            mostrar(boton.textContent, display);
        } else if (boton.classList.contains('operador')) {
            mostrar(boton.textContent, display);
        } else if (boton.classList.contains('igual')) {
            calcular(display);
        } else if (boton.classList.contains('memoria')) {
            cambiarMemoria(boton.textContent, display);
        } else if (boton.classList.contains('lupa')) {
            ampliar();
        }
    });

}

function mostrar(valor, display) {
    display.value += valor;
}

function calcular(display) {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function cambiarMemoria(accion, display) {
    if (accion == 'Me') {
        memoria = display.value;
    } else if (accion == 'Re') {
        if (memoria !== null) {
            display.value = memoria;
        }
    } else if (accion == 'Ce') {
        memoria = null;
        display.value = '';
    }
}

function ampliar() {
    const numero = document.getElementById('display').value;
    const ventana = window.open('', 'Numero Ampliado');
    ventana.document.write(`<div style="font-size: 1000%">${numero}</div>`);
}

window.addEventListener("load", main);
