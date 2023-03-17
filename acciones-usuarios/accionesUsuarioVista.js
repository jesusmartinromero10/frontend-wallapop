export function constructorSaludo(nombre) {
    const parrafo = document.createElement('p')
    parrafo.textContent = `Hola ${nombre} !`
    return parrafo
  }
  