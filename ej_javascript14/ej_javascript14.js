function main() {
  mostrarPrimeraFecha();
  mostrarSegundaFecha();
  mostrarHora();
  setInterval(mostrarHora,1000);
}

function mostrarPrimeraFecha() {
  const d = new Date();

  document.getElementById("primerafecha").innerHTML = 
  `Fecha: ${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()}`;
  // A los meses se le suma 1 porque getMonth devuelve un numero del 0 al 11
}

function mostrarSegundaFecha() {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const d = new Date();

  document.getElementById("segundafecha").innerHTML = 
  `Hoy es ${dias[d.getDay()]}  ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;

}

function mostrarHora() {
    const d = new Date();
    
    document.getElementById("hora").innerHTML = 
    `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    
}

window.addEventListener("load", main);
