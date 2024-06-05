 import { mensajes, tiposErrores } from "./customError.js"; 

const campoDeFormulario = document.querySelectorAll("[required]");
const formularioSeleccion = document.querySelector("[data-formulario-seleccion]");
const formularioContacto = document.querySelector("[data-formulario-contacto]");

formularioSeleccion.addEventListener("submit", evento => {
    evento.preventDefault();
    const listaDatosSeleccion = {
        nombre: evento.target.elements["nombre"].value,
        precio: evento.target.elements["precio"].value,
        imagen: evento.target.elements["imagen"].value,
        email: evento.target.elements["email"].value,
    };
    const articulos = JSON.parse(localStorage.getItem("articulos")) || [];
    articulos.push(listaDatosSeleccion);
    localStorage.setItem("articulos", JSON.stringify(articulos));
    window.location.href = "./pagina_articulo_seleccionado.html";
});

formularioSeleccion.querySelectorAll('input[required]').forEach(campo => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

function verificarCampo(campo) {
    const mensajeError = campo.parentElement.querySelector(`span.mensaje-error[name="${campo.name}"]`);
    campo.setCustomValidity("");
    mensajeError.textContent = "";

    if (!campo.validity.valid) {
        const errores = tiposErrores.map(error => {
            if (campo.validity[error]) {
                return mensajes[campo.name][error];
            }
        }).filter(error => error);
        mensajeError.textContent = errores.join(", ");
    }
}

formularioContacto.addEventListener("submit", evento => {
    evento.preventDefault();
    const listaDatosContacto = {
        nombre: evento.target.elements["nombre"].value,
        email: evento.target.elements["email"].value,
    };
    const contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push(listaDatosContacto);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    window.location.href = "./pagina_contacto_enviado.html";
});

formularioContacto.querySelectorAll('input[required]').forEach(campo => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

