function main() {
    
  const resoluciones = {
    resolucion1: "640x480",
    resolucion2: "960x540",
    resolucion3: "1280x720",
    resolucion4: "1920x1080",
    resolucion5: "2560x1440",
    resolucion6: "3840x2160",
    resolucion7: "7680x4320",
  };

  let resolucion = `${screen.width}x${screen.height}`;
  
  let radios = document.getElementsByName("resoluciones");

  marcarRadio(resoluciones, resolucion, radios);

}

function marcarRadio(resoluciones, resolucion, radios) {
  
  for (let radio of radios) {
    if (resoluciones[radio.id] == resolucion) {
      radio.checked = true;
    }
  }

}

document.addEventListener("DOMContentLoaded", main);
