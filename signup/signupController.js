import { pubSub } from "../pubSub.js";
import { crearUsuario } from "./signup.js";

export function signupController(signupElement) {

  signupElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailElement = signupElement.querySelector('#username');
    const passwordElement = signupElement.querySelector('#password');
    const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');
    
    if (isEmailValid(emailElement.value) &&
        isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {
          try {
            await crearUsuario(emailElement.value, passwordElement.value)
            signupElement.reset();

            pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, 'Usuario creado correctamente')
            window.location = '/'
          } catch (error) {
            pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, error.message)
          }
    }
  })

  
  function isEmailValid(email) {
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!mailRegExp.test(email)) {
      pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, 'El email no está bien escrito')
      return false
    }

    return true
  }

  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      pubSub.publish(pubSub.TOPICS.MOSTRAR_NOTIFICACIONES, 'Las contraseñas no son iguales')
      return false
    }

    return true
  }
}


