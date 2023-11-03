function main() {
    const url = new URLSearchParams(window.location.search);
    const img = url.get("img");
    document.body.style.backgroundImage = `url(${img})`;
}

window.addEventListener("load", main);
