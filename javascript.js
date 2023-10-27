function paginaInicio() {
  window.location.href = "index.html";
}
function paginaContacto() {
  window.location.href = "contacto.html";
}
//--------------------------------------------------------->
//Imagenes y flechas
console.log("funcionando1");
var imagenes = [
  "IMAGENES/bowie.png",
  "IMAGENES/cerati.png",
  "IMAGENES/parte de la religion FINAL.png",
  "IMAGENES/strokes.png",
];
document.getElementById("Imagen").src = imagenes[0];

const contenedor = document.querySelector(".contenedor-slider");
const botonesIzquierda = document.querySelector(".slider-izquierdo");
const botonesDerecha = document.querySelector(".slider-derecho");

let siliderDerecha = document.querySelector(".der");
let sliderIzquierda = document.querySelector(".izq");
let contador = 0;

function moverDerecha() {
  contador++;
  if (contador > imagenes.length - 1) {
    contador = 0;
  }
  document.getElementById("Imagen").src = imagenes[contador];
}

function moverIzquierda() {
  contador--;
  if (contador < 0) {
    contador = imagenes.length - 1;
  }
  document.getElementById("Imagen").src = imagenes[contador];
}
botonesIzquierda.addEventListener("click", moverIzquierda);
botonesDerecha.addEventListener("click", moverDerecha);
