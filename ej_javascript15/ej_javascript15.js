let nombre = [];
let edad = [];
const cantidad = 5;
let personas = "";

function main() {

    const b1 = document.getElementById("boton1");
    const b2 = document.getElementById("boton2");


    b1.addEventListener("click", boton1);
    b2.addEventListener("click", boton2);

}

function boton1() {

    nombre = [];
    edad = [];

    for (let i = 0; i < cantidad; i++) {
        nombre[i] = prompt("Dime el " + (i + 1) + " nombre");
        edad[i] = prompt("Dime el " + (i + 1) + " edad");
        personas += `${nombre[i]}*${edad[i]}#`;
    }
    alert(personas);

    nombre = [];
    edad = [];

}
function boton2() {

    let persona;
    let p;

    persona = personas.split("#");

    for (let i = 0; i < persona.length - 1; i++) {
        p = persona[i].split("*");
        nombre[i] = p[0];
        edad[persona.length - (i + 2)] = p[1];
    }
    
    let div = document.getElementById("divTabla");
    let tabla = "";

    tabla = "<table> <thead> <tr> <th> NOMBRE </th> <th> EDAD </th> </tr> </thead> <tbody>"

    for (let i = 0; i < cantidad; i++) {
        tabla += ` <tr>  <td> ${nombre[i]} </td> <td> ${edad[i]} </td> </tr> `;
    }

    tabla += "</tbody> </table>"

    div.innerHTML = tabla;

}

window.addEventListener("load", main);
