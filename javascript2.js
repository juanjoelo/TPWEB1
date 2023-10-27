function paginaInicio() {
  window.location.href = "index.html";
}
function paginaContacto() {
  window.location.href = "contacto.html";
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var recibirNoticias = document.getElementById("recibirNoticias").checked;

    // Verifica si hay datos ingresados
    if (!nombre && !email && !mensaje && !recibirNoticias) {
      return;
    }
    // Verifica la longitud del nombre
    if (nombre.length < 5 || nombre.length > 50) {
      document.getElementById("errorNombre").innerHTML =
        "El nombre debe tener entre 5 y 50 caracteres";
      return;
    } else {
      document.getElementById("errorNombre").innerHTML = "";
    }

    // Verifica la longitud del correo electrónico
    if (email.length < 10 || email.length > 100) {
      document.getElementById("errorEmail").innerHTML =
        "El correo electrónico debe tener entre 10 y 100 caracteres";
      return;
    } else {
      document.getElementById("errorEmail").innerHTML = "";
    }
    if (email.indexOf("@") == -1) {
      document.getElementById("errorEmail").innerHTML =
        "El correo electrónico debe contener al menos un símbolo @";
      return;
    } else {
      document.getElementById("errorEmail").innerHTML = "";
    } 

    // Verifica la longitud del mensaje
    if (mensaje.length < 20 || mensaje.length > 500) {
      document.getElementById("errorMensaje").innerHTML =
        "El mensaje debe tener entre 20 y 500 caracteres";
      return;
    } else {
      document.getElementById("errorMensaje").innerHTML = "";
    }

    // Elimina el elemento datosEnviados si ya existe
    var datosEnviados = document.getElementById("datosEnviados");
    if (datosEnviados) {
      datosEnviados.remove();
    }

    // Verifica si los campos obligatorios están vacíos
    if (!nombre) {
      document.getElementById("errorNombre").innerHTML =
        "Por favor ingrese su nombre";
    } else {
      document.getElementById("errorNombre").innerHTML = "";
    }

    if (!email) {
      document.getElementById("errorEmail").innerHTML =
        "Por favor ingrese su correo electrónico";
    } else {
      document.getElementById("errorEmail").innerHTML = "";
    }

    if (!mensaje) {
      document.getElementById("errorMensaje").innerHTML =
        "Por favor ingrese su mensaje";
    } else {
      document.getElementById("errorMensaje").innerHTML = "";
    }

    // Si hay algún campo vacío, no envía el formulario
    if (!nombre || !email || !mensaje) {
      return;
    }

    // Crea el elemento datosEnviados y lo agrega al DOM
    datosEnviados = document.createElement("div");
    datosEnviados.id = "datosEnviados";
    datosEnviados.innerHTML = `
        <h2>Datos Enviados:</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        <p>${recibirNoticias ? "Recibirá noticias de nuestro club!" : ""}</p>
    `;
    document.getElementById("contacto-content").appendChild(datosEnviados);
  });
