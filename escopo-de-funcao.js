const ano = 2000
console.log(ano + 2)

console.log('------------')

{
  var cor = 'preto'
  const marca = 'Fiat'
  let portas= 4

}

//console.log(cor, marca, portas)
// O correto é 'cor' ao invez de 'var'
// Além disos const e let ficam apenas dentro do escopo do bloco. O que vaza do bloco é apenas VAR

console.log('----------------')
const dois = 2
function somarDois(x) {
  return x + dois
}

function divirDois(x) {
  return x / dois
}

console.log(somarDois(4))
console.log(divirDois(8))

console.log('--------------------')

const numero = 50

for(var let = 0; numero < 10; numero++){
  console.log(numero)
}

const total = 10 * numero
console.log(total)




