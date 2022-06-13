
// const menu = document.querySelector('.menu')

// menu.className // retorna string com nome da classe
// menu.classList // retorna lista de classes
// menu.classList.add('ativo')
// menu.classList.add('teste')
// console.log(menu.className)

// menu.classList.contains('ativo')
// console.log(menu.classList.contains('ativo'))
// console.log('-------')
// const animals = document.querySelectorAll('.grid-section')

// animals.forEach(function(a){
//   a.classList.add('teste')
// })

// const animais = document.querySelector(' .animais')

const img = document.querySelector('img')

img.hasAttribute('src')

// Adicione a classe ativa a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach(function(item){
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha no primeiro

itensMenu.forEach(function(item,index){
  if (index > 0) {
    item.classList.remove('ativo')
  }
})

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img')

imagens.forEach(function(imagem){
  imagem.hasAttribute('alt')
})

// modifique o href do link externo no menu

itensMenu[itensMenu.length - 1].setAttribute('href','https://www.google.com') 

const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://google.com/')






