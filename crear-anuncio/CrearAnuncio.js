export const crearAnuncio = async (contenidoAnuncio, nombreAnuncio, precioAnuncio, estadoAnuncio, fotografiaAnuncio) => {

    const nuevoAnucio = {
      nombre : nombreAnuncio,
      descripcion: contenidoAnuncio,
      precio: precioAnuncio,
      estado: estadoAnuncio,
      fotografia: fotografiaAnuncio
    }
  
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:8000/api/anuncios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(nuevoAnucio)
    })
  
    if (!response.ok) {
      throw new Error('Error creando anuncio')
    }
  
  }