import { constructorVistaNotificaciones } from "./vista-notificaciones.js";
import { pubSub } from "../pubSub.js";


export function controladorNotificaciones(elementoNotificaciones){
    function mostrarMensaje (mensaje) {
        elementoNotificaciones.innerHTML = constructorVistaNotificaciones(mensaje)
        setTimeout(()=> {
            elementoNotificaciones.innerHTML = ''
        }, 5000);
    }

    pubSub.subscribe(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, (mensaje) => {
        mostrarMensaje(mensaje)
    })

    return mostrarMensaje;

}