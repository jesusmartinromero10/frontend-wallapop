import { controladorDetallesAnuncios } from "./controladorDetallesAnuncios.js";

// leer de la url el id del anuncio
const params = new URLSearchParams(window.location.search)
const anuncioId = params.get('anuncioId');

// si el queryparam no existe, haremos una redirección al listado de anuncios
if (!anuncioId) {
  window.location = '/'
} else {
  // crearemos un controlador donde le pasaremos dicho id
  const elementoDetalleAnuncio = document.querySelector('.detalle-anuncio');

  controladorDetallesAnuncios(elementoDetalleAnuncio, anuncioId)
}