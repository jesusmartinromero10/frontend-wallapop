import { decodeToken } from '../utils/decodeToken.js'
import { constructorSaludo } from './accionesUsuarioVista.js'

export function accionesUsuariosControlador(elementoAccionUsuario) {
  const token = localStorage.getItem('token')
  const elementoCerrarSesion = elementoAccionUsuario.querySelector('#closeSession')

  if (token) {
    const loginLinkElement = elementoAccionUsuario.querySelector('#loginLink')
    const signupLinkElement = elementoAccionUsuario.querySelector('#signupLink')
    loginLinkElement.remove()
    signupLinkElement.remove()

    const payload = decodeToken(token)
    elementoAccionUsuario.appendChild(constructorSaludo(payload.username))
    elementoCerrarSesion.addEventListener('click', () => {
      localStorage.removeItem('token')
      window.location.reload()
    })
  } else {
    const createTweetLinkElement = elementoAccionUsuario.querySelector('#crearAnuncioLink')
    createTweetLinkElement.remove()
    elementoCerrarSesion.remove()
  }


}