const cantidad = 10;

function main() {
    let nums = [];
    let mayormenor = [];

    nums = pedirNumeros();
    mayormenor = leerNumeros(nums);
    escribirNumeros(nums, mayormenor);

}

function pedirNumeros() {
    let numeros = [];

    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseInt(prompt("Dime el " + (i + 1) + " numero"));
    }

    return numeros;
}

function leerNumeros(numeros) {
    let mayormenor = [numeros[0], numeros[0]];

    for (let i = 0; i < cantidad; i++) {
        if (numeros[i] > mayormenor[0]) {
            mayormenor[0] = numeros[i];
        }
        if (numeros[i] < mayormenor[1]) {
            mayormenor[1] = numeros[i];
        }
    }

    return mayormenor;
}

function escribirNumeros(numeros, mayormenor) {
    const div = document.getElementById("div1");
    let escribirDiv = "<table><tr>";
    let clase = "";

    for (let i = 0; i < cantidad; i++) {
        escribirDiv += `<td`;
        if (numeros[i] == mayormenor[0]) {
            clase = ` class="mayor">`;
        } else if (numeros[i] == mayormenor[1]) {
            clase = ` class="menor">`;
        } else {
            clase = `>`;
        }
        escribirDiv += `${clase}${numeros[i]}</td>`;

    }

    escribirDiv += "</table></tr>";

    div.innerHTML = escribirDiv;
}


window.addEventListener("DOMContentLoaded", main);
