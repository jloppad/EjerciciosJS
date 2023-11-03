function main() {

    let logo = document.getElementById("navegador");
    let navegador = buscarNavegador();
    ponerLogo(navegador,logo);

}

function buscarNavegador() {
    let infoNavegador = navigator.userAgent;
    let navegador;
    if (infoNavegador.includes("Edg")) {
        navegador = "Edg";
    } else if (infoNavegador.includes("Chrome")) {
        navegador = "Chrome";
    } else if (infoNavegador.includes("Firefox")) {
        navegador = "Firefox";
    } else {
        navegador = "Otro navegador";
    }
    return navegador;
}

function ponerLogo(navegador,logo) {

    if (navegador === "Edg") {
        logo.src = "microsoft.png";
        logo.alt = "Logo de Internet Explorer";
    } else if (navegador === "Firefox") {
        logo.src = "firefox.png";
        logo.alt = "Logo de Firefox";
    } else if (navegador === "Chrome") {
        logo.src = "chrome.png";
        logo.alt = "Logo de Chrome";
    } else {
        logo.alt = navegador;
    }

}

window.addEventListener("DOMContentLoaded", main);
