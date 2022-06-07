// verifique a distancia da primeira imagem em relaão ao tipo da página

const img1 = document.querySelector('img')
const img1distance = img1.getBoundingClientRect().top

console.log(img1distance)

// Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll('img')

imagens.forEach(function(imagem){
  let somaImagens 
  somaImagens += imagem.offsetHeight

  return somaImagens
})

// Verifique se os links da página possuem 
// o mínimo recomendado para telas utilizadas
// com o dedo

const links = document.querySelectorAll('a')

links.forEach(function(link) {
  let heightBoolean 
  let widthBoolean
  if(link.offsetHeight >= 48){
    heightBoolean = true
  }
  if(link.offsetWidth >= 48) {
    widthBoolean = true
  }
  else {
    heightBoolean, widthBoolean = false
    
  }
  console.log(heightBoolean && widthBoolean)
  return (heightBoolean && widthBoolean)
  
})

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-width: 720px')
const menu = document.querySelector('.menu')
if (small.matches) {
  console.log('Tela menor que 600px')
  menu.classList.add('menu-mobile')
} 