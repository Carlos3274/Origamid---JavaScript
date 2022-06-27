// todos os valores selecionam a mesma div

let div = document.querySelector('div')
div = document.querySelector('[data-cor]')
div = document.querySelector('[data-cor="azul"]')


div.dataset.height = 1000
console.log(div.dataset)

delete div.dataset.width


const paragrafos = document.querySelectorAll('[data-anima]')

paragrafos.forEach((paragrafo) => {
  paragrafo.classList.add(div.dataset.anima)
})