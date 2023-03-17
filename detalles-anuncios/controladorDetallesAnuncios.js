import { decodeToken } from "../utils/decodeToken.js";
import { obtenerAnunciosPorId, borrarAnuncio } from "./detallesAnuncios.js";
import { construirDetalleAnuncio } from "./vistaAnuncios.js";


export async function controladorDetallesAnuncios(elementoDetalleAnuncio, anuncioId) {

    try {
        const anuncio = await obtenerAnunciosPorId(anuncioId)   
        elementoDetalleAnuncio.innerHTML = construirDetalleAnuncio(anuncio)
        manejadorBorradoAnuncioBoton(elementoDetalleAnuncio, anuncio)
    } catch (error) {
        alert(error)
    }

    function manejadorBorradoAnuncioBoton(elementoDetalleAnuncio, anuncio){
        const token = localStorage.getItem('token');
        const elementeBorradoBoton = elementoDetalleAnuncio.querySelector('#borrarAnuncio');

        if (!token){
            elementeBorradoBoton.remove()
        }else {
            const informaciomUsuario = decodeToken(token);
            if (anuncio.userId === informaciomUsuario.userId) {
              // añadir evento click al boton + enganchar con sparrest
              elementeBorradoBoton.addEventListener('click', async () => {
                const pregunta = confirm('¿Deseas borrar el anuncio? seguro??!?!?!')
                if (pregunta) {
                  await borrarAnuncio(anuncio.id)
                  window.location = '/'
                }
              })
            } else {
              elementeBorradoBoton.remove()
            }

        }
    }
}