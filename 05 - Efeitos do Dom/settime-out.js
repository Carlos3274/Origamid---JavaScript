// formas abreviadas

setTimeout( function () {
  console.log('foo')
},1000)

setTimeout(() => {
  console.log('bar')
})

// para executar um atras do outro com for :

for(let i = 0; i <  10; i++) {
  setTimeout(() => {
    console.log(i)
  },1000 * i)  // diferença aqui
} 