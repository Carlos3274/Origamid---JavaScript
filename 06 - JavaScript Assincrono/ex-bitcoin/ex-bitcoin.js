/* Utilizando a API blockchain retorno no dom, o valor de compra da bitcoin emr reais, atualize este valor a cada 30s */

const valor = fetch('https://blockchain.info/ticker')
const span = document.querySelector('span')


function mostrarValor() {
  valor.then((response) => {
    return response.json()
  }).then((body) => {
    span.innerText ='R$ '+ body["BRL"].buy.toString().replace('.',',')
  })
}


setInterval(mostrarValor, 30000)