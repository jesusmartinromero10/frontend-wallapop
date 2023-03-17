import { controladorCreacionAnuncio } from "./controladorCreacionAnuncio";

const token = localStorage.getItem('token')

if (!token) {
  window.location = '/'
} else {
  const elementoFormularioCreacionAnuncio = document.querySelector('#formularioCreacionAnuncio');
  controladorCreacionAnuncio(elementoFormularioCreacionAnuncio)
}