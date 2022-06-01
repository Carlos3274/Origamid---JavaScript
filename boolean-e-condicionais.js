console.log('ola mundo')

var possuiFaculdade = false
if(possuiFaculdade) {
  console.log('Realmente possui fauculdade') 
} else {
  console.log('Não possui faculdade')
}

console.log('-=--=--=--=--=--=--=--=--=--=-')

var minhaIdade = 21
var idadePai = 64

if(minhaIdade > idadePai) {
  console.log('É maior')
}
if(minhaIdade === idadePai){
  console.log('É igual')
}
else {
  console.log('É menor')
}

// (5 - 2) && (5 - ' ') && (5 - 2);
//   3     &&   true    &&    3   
//   3

var expression = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expression)


var nome = 'Andre', // true
    idade = 28, // true
    possuiDoutorado = false, // false
    empregoFuturo, // false ( undefined )
    dinheiroNaConta = 0 // false

console.log(!!'Andre',!!28, !!possuiDoutorado, !! empregoFuturo, !!dinheiroNaConta)

var brasil = 207
var china = 1340 

console.log(brasil === china)

// if (('Gato' === 'gato') && (5 > 2)) {
//         false           && true
// }            false

if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

// 'Gato' === 'gato || 5 > 2 
//      false      || true
//        true

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão')
} else {
  console.log('Falso')
}
