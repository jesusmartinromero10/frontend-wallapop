export async function loginUser(email, password) {
  const user = {
    username: email,
    password: password
  }

  const respuesta = await fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!respuesta.ok) {
    throw new Error('Error al identificar el usuario')
  }

  const data = await respuesta.json()

  return data.accessToken;

}
