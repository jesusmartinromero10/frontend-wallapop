export function contruirListadoAnuncio(anuncio){
  const nuevoElementoAnuncio = document.createElement('article');
  nuevoElementoAnuncio.classList.add('anuncio')
  //const Date = new Date(anuncio.date)

  nuevoElementoAnuncio.innerHTML = `
    <div class="user-info">
      <span>${anuncio.nombre}</span>
      <img src="${anuncio.fotografia}" />
    </div>
    <p>Descripcion : ${anuncio.descripcion}</p>
    <p>Precio: ${anuncio.precio}</p>
    <p>Estado: ${anuncio.estado}</p>
  `;

  return nuevoElementoAnuncio;
}


export function construcctorSpinnerVista() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
  }

export function constructorErrorLeerAnuncios() {
return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`
}

export function constructorListaAnuncioVacia() {
  return `<p>No hay anuncios disponibles</p>`
}

