import { signupController } from "./signupController.js";
import { controladorNotificaciones } from "../notificaciones/controlador-notificaciones.js";

const elementoSignup = document.querySelector('#createUser')
const elementoNotificaciones = document.querySelector('.notificaciones')

controladorNotificaciones(elementoNotificaciones)

signupController(elementoSignup)
