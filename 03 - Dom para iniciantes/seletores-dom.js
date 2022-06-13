const imagens = document.querySelectorAll('img')
console.log(imagens)

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensAnimais)

const links = document.querySelectorAll('[href^="#"]')
console.log(links)

const animals = document.querySelector('.animais-descricao h2')

console.log(animals)


const paragrafos = document.querySelectorAll('p')

const ultimoParagrafo = paragrafos[paragrafos.length - 1]

console.log(ultimoParagrafo)
