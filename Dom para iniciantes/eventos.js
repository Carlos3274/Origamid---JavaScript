/*
const linksInternos = document.querySelectorAll('a[href^="#"]')

function callBack(event){
  event.preventDefault()
  this.classList.add('ativo')

  linksInternos.forEach((link) => {
    if(link !== this) {
      link.classList.remove('ativo')
    }
  })
}

linksInternos.forEach((link) => {
  link.addEventListener('click', callBack)
})
*/
// Selecione todos os elementos do site começando a partir do body, ao clique, mostre exatamente quais elementos estão sendo clicados.
/*
const elementos = document.querySelectorAll('body *')

function callBack(event){
  console.log(event.currentTarget)
}

elementos.forEach(item => {
  item.addEventListener('click', callBack)
});
*/

//utilizando o código anterior, remove o elemento que está sendo clickadom o m´todo remove() remove o elemento

/*
const elementos = document.querySelector('body')

function callBack(event){
  event.target.remove()
}

elementos.addEventListener('click', callBack)
*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site


const elemento = document.querySelector('body')

function callBack(event){
  if (event.key = 't') {
    
  }
  
  
}
elemento.addEventListener('keydown', callBack)