const palabras = ["javascript", "programacion", "html", "css", "desarrollo","servidor","despliegue"];
const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");    

function juego() {

    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    let letrasUsadas = [];
    let intentos = [6];

    let textoBtn = generarBotones(letras);
    escribirSegunID("teclado", textoBtn);
    escribirSegunID("intentos", intentos);
    escribirSegunID("letrasUsadas", letrasUsadas);
    let palabraFiltrada = filtrarPalabra(palabra, letrasUsadas);
    escribirSegunID("display", palabraFiltrada);
    ponerAhorcado("vacio");


    let botones = document.querySelectorAll("div#teclado input[type=button]");
    for (let elemento of botones) {
        elemento.addEventListener("click", function () {
            jugar(event.target.value, palabra, letrasUsadas, intentos);
        });
    }

}

function jugar(opcion, palabra, letrasUsadas, intentos) {
    if (intentos[0] > 1) {
        palabra = palabra.toUpperCase();
        añadirLetraUsada(opcion, letrasUsadas);
        escribirSegunID("letrasUsadas", letrasUsadas);
        if (palabra.includes(opcion)) {
            let palabraFiltrada = filtrarPalabra(palabra, letrasUsadas);
            if (palabra == palabraFiltrada.toUpperCase()) {
                alert("Has ganado");
            }
            escribirSegunID("display", palabraFiltrada);
        } else {
            intentos[0]--;
            escribirSegunID("intentos", intentos);
            ponerAhorcado(intentos);
        }
    } else  if (opcion != "REINICIO"){
        ponerAhorcado(0);
        escribirSegunID("intentos", 0);
        alert("¡Has perdido!, La palabra oculta era: " + palabra);
    }

    if (opcion == "REINICIO") { 
        juego(); // Pone la pagina a los valores por defecto que sea creado 
    }
}

function ponerAhorcado(intentos) {
    let imagen = document.querySelector(`img#ahorcado`);
    imagen.src = `recursos/${intentos}.png`;
}


function filtrarPalabra(palabra, letrasUsadas) {
    palabra = palabra.toUpperCase();
    var palabraFiltrada = "";

    for (var i = 0; i < palabra.length; i++) {
        if (letrasUsadas.includes(palabra[i])) {
            palabraFiltrada += palabra[i];
        } else {
            palabraFiltrada += "_ ";
        }
    }
    palabraFiltrada = palabraFiltrada.toLowerCase();
    return palabraFiltrada;
}

function añadirLetraUsada(letra, letrasUsadas) {
    if (letrasUsadas.includes(letra)) {
        alert("Ya has usado esa letra.");
    } else {
        return letrasUsadas.push(letra);
    }
}

function generarBotones(letras) {
    let texto = "";
    for (let i = 0; i < letras.length; i++) {
        texto += `<input type="button" value="${letras[i]}" id="letra${letras[i]}">`;
    }
    texto += `<input type="button" value="REINICIO" id="reiniciar">`;
    return texto;
}

function escribirSegunID(id, texto) {
    document.querySelector(`#${id}`).innerHTML = texto;
}

document.addEventListener("DOMContentLoaded", juego);

