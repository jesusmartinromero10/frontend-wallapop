export const crearAnuncio = async (contenidoAnuncio) => {

    const nuevoAnucio = {
      content: contenidoAnuncio
    }
  
    const token = localStorage.getItem('token')
  
    const response = await fetch('http://localhost:8000/api/anuncios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(newTweet)
    })
  
    if (!response.ok) {
      throw new Error('Error creando anuncio')
    }
  
  }