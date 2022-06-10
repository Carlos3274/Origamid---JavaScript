// const h1 = document.querySelector('h1')
// const animaisLista = document.querySelector('.animais-descricao')
// const animais = document.querySelector('#animais')
// const mapa = document.querySelector('.mapa')



// // document.body.insertBefore(mapa,animais)

// const novoH2 = document.createElement('h2') // criei um novo elemento
// novoH2.innerText = 'Novo h2' // adicionei conteúdo a ele, texto no caso
// novoH2.classList.add('titulo') // adicionei uma classe a ele

//animais.appendChild(novoH2) // coloquei ele como ultimo filho de '.animais'

// EXERCICIOS

// Duplique o menu e adicione ele em copy
// const menu = document.querySelector('.menu')
// const copy = document.querySelector('.copy')

// const cloneMenu = menu.cloneNode(true)
// copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
// const faq = document.querySelector('.faq-lista')
// const dtSelecionado = faq.children[0]
// console.log(dtSelecionado.outerHTML)

// selecione o DD referente ao primeiro DT
// const faq = document.querySelector('.faq-lista')
// const ddSelecionado = faq.children[1]
// console.log(ddSelecionado)

// Substitua o conteúdo html .faq pelo de .animais
const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')

faq.innerHTML = animais.innerHTML