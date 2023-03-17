import { creacionAnuncio } from "./CrearAnuncio.js"


export async function controladorCreacionAnuncio (elementoFormularioCreacionAnuncio) {
    elementoFormularioCreacionAnuncio.addEventListener('submit', async (event) => {
        event.preventDefault();

        const datosFormulario = new FormData(elementoFormularioCreacionAnuncio);
        const contenidoAnuncio = datosFormulario.get('contenidoAnuncio');

        try {
            await creacionAnuncio(contenidoAnuncio)
            window.location = '/'   
        } catch (error) {
            alert(error)
            
        }
    })
}