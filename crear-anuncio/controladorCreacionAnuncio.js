import { crearAnuncio } from "./crearAnuncio.js"
import { pubSub } from "../pubSub.js";


export async function controladorCreacionAnuncio (elementoFormularioCreacionAnuncio) {
    elementoFormularioCreacionAnuncio.addEventListener('submit', async (event) => {
        event.preventDefault();

        const datosFormulario = new FormData(elementoFormularioCreacionAnuncio);
        const contenidoAnuncio = datosFormulario.get('contenidoAnuncio');
        const nombreAnuncio = datosFormulario.get('nombreAnuncio');
        const precioAnuncio = datosFormulario.get('precioAnuncio');
        const estadoAnuncio = datosFormulario.get('estadoAnuncio');
        const fotografiaAnuncio = datosFormulario.get('fotografiaAnuncio');
        try {
            await crearAnuncio(contenidoAnuncio, nombreAnuncio, precioAnuncio, estadoAnuncio, fotografiaAnuncio)
            window.location = '/'   
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, error.message)
            
            
        }
    })
}