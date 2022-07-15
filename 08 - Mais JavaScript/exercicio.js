function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements)

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none'
    })
    return this // para continuar utilizando os métodos // encadear os métodos
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial'
    })
    return this
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback)
    })
    return this
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className)
    })
    return this
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className)
    })
    return this
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass
  }
}


const btns = $$('button')

function handleClick(event) {
  console.log(event.target)
}

console.log(btns.hide().show().on('click', handleClick).addClass('active'))