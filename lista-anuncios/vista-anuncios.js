export function contruirListadoAnuncio(anuncio){
  const nuevoElementoAnuncio = document.createElement('article');
  nuevoElementoAnuncio.classList.add('anuncio')
  

  nuevoElementoAnuncio.innerHTML = `
  <a href = "./detalles-anuncio.html?anuncioId=${anuncio.id}">
      <div class="user-info">
        <p> Nombre: ${anuncio.nombre}</p>
        <span>Fotografia: </span>
        <img src="${anuncio.fotografia}" />
        <p>Descripcion : ${anuncio.descripcion}</p>
        <p>Precio: ${anuncio.precio}</p>
        <p>Estado: ${anuncio.estado}</p>
      </div>
  </a>
  `;

  return nuevoElementoAnuncio;
}


//export function construcctorSpinnerVista() {
//    return `<div class="spinner"><div></div><div></div><div></div></div>`
//  }

export function constructorErrorLeerAnuncios() {
return `<p class="load-error">Ha habido un problema cargando los anuncios. Inténtalo de nuevo más tarde</p>`
}

export function constructorListaAnuncioVacia() {
  return `<p>No hay anuncios disponibles</p>`
}

