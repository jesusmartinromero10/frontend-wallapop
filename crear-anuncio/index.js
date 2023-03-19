import { controladorCreacionAnuncio } from "./controladorCreacionAnuncio.js";

const token = localStorage.getItem('token')

if (!token) {
  window.location = '/'
} else {
  const elementoFormularioCreacionAnuncio = document.querySelector('#formularioCreacionAnuncio');
  controladorCreacionAnuncio(elementoFormularioCreacionAnuncio)
}