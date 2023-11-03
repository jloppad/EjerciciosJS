function main() {

    document.querySelector("input[type=button]").addEventListener("click",abrirPagina);

}

function abrirPagina() {
    
    let seleccionado;

    seleccionado = document.querySelectorAll("input[type=checkbox]:checked");
    
    for (let pagina of seleccionado){
        window.open(`https://www.${pagina.value}`);
    }
    
}

document.addEventListener("DOMContentLoaded",main);
