function main() {
    
    const numeros = [
        "recursos/Cero.png",
        "recursos/Uno.png", 
        "recursos/Dos.png", 
        "recursos/Tres.png", 
        "recursos/Cuatro.png", 
        "recursos/Cinco.png", 
        "recursos/Seis.png", 
        "recursos/Siete.png", 
        "recursos/Ocho.png", 
        "recursos/Nueve.png"
    ];
    

    let dias = pasarDias("12/19/2023");

    if (dias < 100 || dias > 0) {

        let decenas = parseInt(dias / 10);
        let unidades = parseInt(dias % 10);
    
        ponerNumeros(numeros, decenas, unidades);
        
    }

}

function pasarDias(fecha) {

    let actual = new Date();
    let limite = new Date(fecha);

    let diferencia = limite.getTime() - actual.getTime();
    
    let dias = Math.round(diferencia / 86400000);

    return dias;

}

function ponerNumeros(numeros, decenas, unidades) {

    let imgDecenas = document.querySelector("#vacaciones #decenas");
    let imgUnidades = document.querySelector("#vacaciones #unidades");

    imgDecenas.src = numeros[decenas];
    imgUnidades.src = numeros[unidades];

}

document.addEventListener("DOMContentLoaded", main);
