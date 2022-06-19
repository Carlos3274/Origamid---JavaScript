// Retorne um número aleatório entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random()*(2000-1050+1) + 1050)

console.log(numeroAleatorio)

// retorne o maior numero da lista abaixo
/* let numeros = '4, 5, 20, 8, 9'
numeros = numeros.split(',')
console.log(numeros)

numeros.forEach(function(numero, index) {
  numeros[index] = Number.parseInt(numero)
}) */


// função para limpar os preços e retornar os numeros com centavos arredondados e depois retorna a soma total

let listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230  ', 'r$  200']

console.log(listaPrecos)

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$','').trim().replace(',', '.')
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco)
});

console.log(soma)
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

