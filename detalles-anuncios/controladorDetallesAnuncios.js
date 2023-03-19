
import { pubSub } from "../pubSub.js";
import { decodeToken } from "../utils/decodeToken.js";
import { obtenerAnunciosPorId, borrarAnuncio } from "./detallesAnuncios.js";
import { construirDetalleAnuncio } from "./vistaAnuncios.js";


export async function controladorDetallesAnuncios(elementoDetalleAnuncio, anuncioId) {

    try {
        const anuncio = await obtenerAnunciosPorId(anuncioId)   
        
        elementoDetalleAnuncio.innerHTML = construirDetalleAnuncio(anuncio)
        
       manejadorBorradoAnuncioBoton(elementoDetalleAnuncio, anuncio)
    } catch (error) {
      
      const adios = pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, error.message)
      
      console.log(adios)
      pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, error.message)
      console.log(error.message)
      
    }

    function manejadorBorradoAnuncioBoton(elementoDetalleAnuncio, anuncio){
        const token = localStorage.getItem('token');
        const elementoBorradoBoton = elementoDetalleAnuncio.querySelector('#borrarAnuncio')
        //const elementoBorradoBoton = elementoDetalleAnuncio.querySelector('#borrarAnuncio');

        if (!token){
            elementoBorradoBoton.remove()
        }else {
            const informaciomUsuario = decodeToken(token);
            if (anuncio.userId === informaciomUsuario.userId) {
              
              // añadir evento click al boton + enganchar con sparrest
              elementoBorradoBoton.addEventListener('click', async () => {
                const pregunta = confirm('¿Deseas borrar el anuncio? seguro??!?!?!')
                if (pregunta) {
                  await borrarAnuncio(anuncio.id)
                  window.location = '/'
                }
              })
            } else {
              elementoBorradoBoton.remove()
            }

        }
    }
}