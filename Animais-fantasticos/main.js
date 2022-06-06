// //NodeList é possível usar forEach, contudo, HTML colletion, não.

// const titulos = document.getElementsByClassName('titulo')

// // transformando HTML collection em array para usar o forEach
// const titulosArray = Array.from(titulos)

// titulosArray.forEach(function(item){
//   console.log(item)
// })

// // Arrou Function -> Sintaxe curta em relação a function expression

// // Basta trocar 'function' por =>

// console.log('----------------')
// // se tiver apenas um argumento , pode reduzir um parenteses
// // sem argumento, precisa de parenteses
// // o ideal é sempre usar
// titulosArray.forEach((item , index) => {
//   console.log(item, index)
// })

// let i = 0
// titulosArray.forEach(() => console.log(i++)) // maneira com 1 linha
console.log('-----------')
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach(function(p){
  console.log(p.innerText)
})

// tem que usar parenteses



