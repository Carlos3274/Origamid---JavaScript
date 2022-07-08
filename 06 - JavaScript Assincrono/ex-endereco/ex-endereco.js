/* Utilizando a Api crie um formulario onde o usuário pode digitar o cep e o endereçoi completo é retornado ao clickar em buscar */

const formulario = document.querySelector('#form-cep')
const btn = document.querySelector('.btn')
const span = document.querySelector('span')

let cepUsuario = ''

function handleChange(event){
  cepUsuario = event.target.value
}

function handleButton(event){
  event.preventDefault()
  const cep = fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`)
  cep.then((response) => {
    return response.text()
  }).then((body) => {
    span.innerText = body
  })
}

formulario.addEventListener('change', handleChange)
btn.addEventListener('click', handleButton)


