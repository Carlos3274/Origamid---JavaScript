// ARRAYS

var videoGames = ['Xbox', 'Playstation', 'Nintendo']
console.log(videoGames[1])

videoGames.push('3ds')
console.log(videoGames)
console.log(videoGames.length)
var ultimoItem = videoGames.pop()
console.log(ultimoItem)
videoGames.push('3DS')

// LOOPS

// for (var i = 0; i < 10; i++){
//   console.log(i)
// }
console.log('---------------------------')
// var i = 0
// while (i < 10){
//   console.log(i)
//   i++
// }

// for (var item = 0; item < videoGames.length; item++) {
//   console.log(videoGames[item])
//   if(videoGames[item] === 'Nintendo'){
//     break
//   }
// }
console.log('-----------------------------')
// Para cada item do array , executa 'function
// dinamicamente o 'i' se torna o cada item do array
// neste exemplo, a variável index é o índice do item do array
// videoGames.forEach(function(i, index, array){
//   console.log(i, index, array)
// })

var inicio = 0
var maximo = 5
for(;inicio < maximo;){
  console.log(inicio)
  inicio++
}
console.log('EXERCICIOS --------------------')
var anosBrCopa = [1959, 1962, 1970, 1994, 2002]
// anosBrCopa.forEach(function(ano){
//   console.log(`O Brasil ganhou a copa de ${ano}.`)
// })
for (var i = 0; i < anosBrCopa.length; i++){
  console.log(`O Brasil ganhou a copa de ${anosBrCopa[i]}`)
}


console.log('------------------------')
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for (var i = 0; i < frutas.length; i++){
  console.log(frutas[i])
  if (frutas[i] === 'Pera'){
    break
  }
  
}
console.log('----------')

ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)