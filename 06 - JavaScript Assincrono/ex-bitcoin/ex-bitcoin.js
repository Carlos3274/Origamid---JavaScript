/* Utilizando a API blockchain retorno no dom, o valor de compra da bitcoin emr reais, atualize este valor a cada 30s */


const span = document.querySelector('span')
const btn = document.querySelector('button')


function handleClick(event) {
  event.preventDefault()
  mostrarValor()
}

addEventListener('click',handleClick)

function mostrarValor() {
  const valor = fetch('https://blockchain.info/ticker')
  .then((response) => {
    return response.json()
  }).then((body) => {
    span.innerText ='R$ '+ body["BRL"].buy.toString().replace('.',',')
  })
}


setInterval(mostrarValor, 500)