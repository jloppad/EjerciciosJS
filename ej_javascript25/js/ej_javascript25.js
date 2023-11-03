const paginas = [
    "google.com",
    "marca.com",
    "iesoretania.es",
    "gmail.com",
    "moodle.com"
]
function main() {

    document.querySelector("input[type=button]").addEventListener("click",abrirPagina);

}

function abrirPagina() {

    window.open(`https://www.${paginas[cogerOpcion()]}`);
    
}

function cogerOpcion() {

    var seleccion = document.querySelector('#pag');

    return seleccion.selectedIndex;
}

document.addEventListener("DOMContentLoaded",main);
