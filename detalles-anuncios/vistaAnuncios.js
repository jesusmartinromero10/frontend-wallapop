export const construirDetalleAnuncio = (anuncio) => {
  return `
  <article>
      <p><span>${anuncio.nombre}</span><span>${anuncio.precio}</span></p>
      <p>${anuncio.descripcion}</p>
      <p>${anuncio.precio} €.</p>
      <img src=${anuncio.fotografia}></img>
  
</article>
      <button id="borrarAnuncio">borrar anuncio</button>
    `
}