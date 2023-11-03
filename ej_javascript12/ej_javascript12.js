let actual = 0; // Numero para determinar imagen y color a mostrar

function main() {
    setInterval(cambiaImagen, 2000);
}

function cambiaImagen() {
    const imagenes = ["../imagen1.jpg", "../imagen2.jpg", "../imagen3.jpg", "../imagen4.jpg"];
    const colores = ["blue", "red", "green", "yellow"];

    if (actual === imagenes.length - 1) {
        actual = 0;
    } else {
        actual += 1;
    }

    document.getElementById("imagen").src = imagenes[actual];
    document.getElementById("subtitulo").style.color = colores[actual];
}

window.addEventListener("load", main);

