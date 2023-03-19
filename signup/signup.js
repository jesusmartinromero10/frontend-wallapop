export async function crearUsuario(email, password) {
  
  const user = {
    username: email,
    password: password
  }
  
  
  const respuesta = await fetch('http://localhost:8000/auth/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })

  
  if (!respuesta.ok) {
    throw new Error('Error al crear el usuario')
  }

}
