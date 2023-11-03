const frases =
    [
        "Comprar pan",
        "Ir al mercadona",
        "Estudiar informatica",
        "Viajar a Madrid",
        "Programar una calculadora",
        "Ir al colegio",
        "Jugar al futbol",
        "Entrenar baloncesto",
        "Arreglar la television",
        "Construir un edificio"
    ];

const imagenes =
    [
        "imagen1.jpg",
        "imagen2.jpg",
        "imagen3.jpg",
        "imagen4.jpg",
        "imagen5.jpg"
    ];

function main() {
    mostrarFrases();
    mostrarImagenes();
    setInterval(mostrarFrases, 3000);
    setInterval(mostrarImagenes, 10000);
}

function mostrarFrases() {
    const divFrases = document.getElementById("frases");
    let escribirFrases = "<p>";
    let frasesAleatorias = [];

    while (frasesAleatorias.length < 5) {

        let aleatorio = frases[Math.floor(Math.random() * frases.length)];

        if (!frasesAleatorias.includes(aleatorio)) {
            frasesAleatorias.push(aleatorio);
            escribirFrases += `${aleatorio}<br />`
        }
    }

    escribirFrases += "</p>";

    divFrases.innerHTML = escribirFrases;
}

function mostrarImagenes() {
    const divImagenes = document.getElementById("imagenes");
    let imagenesAleatorias = [];
    let escribirImagenes = "";

    while (imagenesAleatorias.length < 3) {

        let aleatorio = imagenes[Math.floor(Math.random() * imagenes.length)];

        if (!imagenesAleatorias.includes(aleatorio)) {
            imagenesAleatorias.push(aleatorio);
            escribirImagenes += `<img src="${aleatorio}" alt="">`
        }
    }

    divImagenes.innerHTML = escribirImagenes;
}

window.addEventListener("DOMContentLoaded", main);