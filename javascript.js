function paginaInicio() {
  window.location.href = "https://juanjoelo.github.io/TPWEB1/";
}
function paginaContacto() {
  window.location.href = "contacto.html";
}
const contenedor = document.querySelector(".contenedorCarrusel");
const botonesIzquierda = document.querySelector(".izq");
const botonesDerecha = document.querySelector(".der");

let index = 0;

function cambiarImagen(index) {
  contenedor.style.transform = "translateX(-400%)";
}
