import { accionesUsuariosControlador } from "./acciones-usuarios/accionesUsuariosControlador.js"
import { controladorListadoAnuncios } from "./lista-anuncios/controlador-listar-anuncios.js"
import { controladorNotificaciones } from "./notificaciones/controlador-notificaciones.js"


const elementoNotificaciones = document.querySelector('.notificaciones')
const elementoListadoAnuncio = document.querySelector('.lista-anuncios')
const elementoAccionUsuario = document.querySelector('.accion-usuario')

controladorNotificaciones(elementoNotificaciones)
controladorListadoAnuncios(elementoListadoAnuncio)
accionesUsuariosControlador(elementoAccionUsuario)