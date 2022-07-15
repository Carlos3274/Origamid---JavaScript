/* Crie 4 lis na pagina utilizando o for...of adicione uma classe a cada li */

const lis = document.querySelectorAll('li')

for(const li of lis) {
  li.classList.add('active')
}


// utilize o for...in para listar todas as propriedades e valores do objeto window



for(const windowKey in window) {
  console.log(windowKey, window[windowKey])
}