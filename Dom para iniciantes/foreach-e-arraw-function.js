const valoresList = document.querySelectorAll('li')

valoresList.forEach(function(valorAtual, index, array){
  console.log(valorAtual)
  console.log(index)
  console.log(array)
})

//NodeList é possível usar forEach, contudo, HTML colletion, não.

const titulos = document.getElementsByClassName('titulo')

// transformando HTML collection em array para usar o forEach
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item){
  console.log(item)
})
