import { controladorNotificaciones } from '../notificaciones/controlador-notificaciones.js'
import { loginController } from "./loginController.js"

const loginElement = document.querySelector('#logUser')
const elementoNotificaciones = document.querySelector('.notificaciones')

controladorNotificaciones(elementoNotificaciones)
loginController(loginElement)
