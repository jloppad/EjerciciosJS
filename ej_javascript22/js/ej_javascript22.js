function main() {

    let li = document.querySelectorAll("li");

    for (let elemento of li){
        elemento.addEventListener("mouseover",(event) => {
            event.target.style.background = "lightblue";
            event.target.style.color = "yellow";
        });
        elemento.addEventListener("mouseout",(event) => {
            event.target.style.background = "white";
            event.target.style.color = "black";
        });
    }

}


document.addEventListener("DOMContentLoaded",main);
