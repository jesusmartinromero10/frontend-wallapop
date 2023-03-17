import { traerAnuncios } from "./anuncios.js";
import { pubSub } from "../pubSub.js";
import { construcctorSpinnerVista, constructorListaAnuncioVacia, contruirListadoAnuncio } from "./vista-anuncios.js";

export async function controladorListadoAnuncios(elementoListadoAnuncio) {
    elementoListadoAnuncio.innerHTML = construcctorSpinnerVista()
    let anuncios = [];
    
    try {
        anuncios = await traerAnuncios()
        
        pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, 'Se han cargado los anuncios correctamente')

        if (anuncios.length > 0){
            mostrarAnuncios(elementoListadoAnuncio, anuncios)
        }
        else {
            mostrarMensaje(elementoListadoAnuncio)
        }

    } catch (error) {
        pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, 'No hemos podido cargar los anuncios')
        
    } finally {

        ocultarSpinner(elementoListadoAnuncio)
    }

    
   
   


}


function ocultarSpinner(elementoListadoAnuncio){
    const elementoSpinner = elementoListadoAnuncio.querySelector('.spinner')
    elementoSpinner.classList.add('ocultar')

}

function mostrarAnuncios(elementoListadoAnuncio, anuncios){
    for (const anuncio of anuncios){
        const nuevoAnucio = contruirListadoAnuncio(anuncio)
        elementoListadoAnuncio.appendChild(nuevoAnucio)
        
    }

}

function mostrarMensaje(elementoListadoAnuncio){
    elementoListadoAnuncio.innerHTML = constructorListaAnuncioVacia()
}