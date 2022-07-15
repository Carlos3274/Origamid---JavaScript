const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
}
const {marca, ano , portas} = carro

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['livro 1', 'livro 2'],
      videos: ['videos js','videos html']
    },
    fisicas: {
      caderinos: ['cadernos 1']
    }
  }
}

console.log(cliente.compras.digitais.livros)

// se estiverem em níveis diferentes deve-se indiciar como foi feito em 'digitais:', isto é destructing dentro de destructing
const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras

// se quiser personalizar o nome da variável:

const {nome: nomeAndre} = cliente
console.log(nomeAndre)

// setar um valor padrão caso NENHUM valor seja atribuído

const {nome: nomePessoa, email = 'email@gmail.com'}= cliente.compras
console.log(email)

// destructing de Arrays

const frutas = ['banana', 'uva', 'morango']
// sem destructing
const primeiraFruta = frutas[0]
const segundaFruta = frutas[1]
const terceiraFruta = frutas[2]
// com destructing
const [primeira, segunda, terceira] = frutas
console.log(primeira)

// A declaração de variáveis tbm pode ser facilitada com destructing

// sem destructing
/* const primeiro = 'item 1'
const segundo = 'item 2'
const terceiro = 'item 3' */
// com destructing
const [primeiro, segundo, terceiro] = ['item 1', 'item 2', 'item 3']

// destructing em argumentos de função
// * sem destructing
/* function handleKeyboard(event) {
  console.log(event.key)
} */

// com destructing
function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode)
}

document.addEventListener('keyup', handleKeyboard)