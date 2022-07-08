/* Utilizando a api do chucknorris retorna uma piada randomica , toda vez que clickar em proxima */

const span = document.querySelector('span')
const btn = document.querySelector('.btn')




function handleClick(event){
  event.preventDefault()
  // exibe a piada
  const joke = fetch('https://api.chucknorris.io/jokes/random')

  joke.then((response) => {
    return response.json()
  }).then((body) => {
    span.innerText = body.value
  })
}

btn.addEventListener('click', handleClick)


