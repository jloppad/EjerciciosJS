function main() {

    document.querySelector("input[type=button]").addEventListener("click",abrirPagina);

}

function abrirPagina() {

    let seleccionado;

    seleccionado = document.querySelector("input[type=radio]:checked").value;

    window.open(`https://www.${seleccionado}`);
    
}

document.addEventListener("DOMContentLoaded",main);
