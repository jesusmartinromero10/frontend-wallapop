export async function obtenerAnunciosPorId (anuncioId){
    const response = fetch(`http://localhost:8000/api/anuncios/${anuncioId}`)

    if (!response.ok){
        throw new Error('El anuncio solicitado no existe')
    }

    const anuncio = await (await response).json();

    return anuncio

}

export const borrarAnuncio = async (tweetId) => {
    const token = localStorage.getItem('token')
  
    const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      }
    })
  }