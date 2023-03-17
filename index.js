import { controladorListadoAnuncios } from "./lista-anuncios/controlador-listar-anuncios.js"
import { controladorNotificaciones } from "./notificaciones/controlador-notificaciones.js"


const elementoNotificaciones = document.querySelector('.notificaciones')
const elementoListadoAnuncio = document.querySelector('.lista-anuncios')


controladorNotificaciones(elementoNotificaciones)
controladorListadoAnuncios(elementoListadoAnuncio)
