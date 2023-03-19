export const construirDetalleAnuncio = (anuncio) => {
  const anuncioDate = new Date(anuncio.updatedAt)
  return `
  <article>
      <p><span>Nombre: ${anuncio.nombre}</span>
      <p>Detalles: ${anuncio.descripcion}</p>
      <p>Precio: ${anuncio.precio} €.</p>
      <p>Fecha publicacion: ${anuncioDate.toISOString()}</p>
      <img src=${anuncio.fotografia}></img>
  
</article>
      <button id="borrarAnuncio">borrar anuncio</button>
    `
}