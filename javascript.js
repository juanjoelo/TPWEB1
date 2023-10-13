function paginaInicio() {
  window.location.href = "https://juanjoelo.github.io/TPWEB1/";
}
function paginaContacto() {
  window.location.href = "contacto.html";
}
var imagenes = [
  "IMAGENES/bowie.png",
  "IMAGENES/cerati.png",
  "IMAGENES/parte de la religion FINAL.png",
  "IMAGENES/strokes.png",
];
document.getElementById("Imagen").src = imagenes[0];

const contenedor = document.querySelector(".contenedorCarrusel");
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
  document.Imagen.src = imagenes[contador];
}
botonesDerecha.addEventListener("click", moverDerecha);
