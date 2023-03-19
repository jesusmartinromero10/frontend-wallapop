export const construirDetalleAnuncio = (anuncio) => {
    const anuncioDate = new Date(anuncio.updatedAt)
    return `
      <p>${anuncio.nombre} - ${anuncioDate.toISOString()}</p>
      <button id="borrarAnuncio">borrar anuncio</button>
    `
  }