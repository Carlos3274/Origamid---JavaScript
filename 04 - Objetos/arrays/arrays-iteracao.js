// maior valor de um array com reduce

const numeros = [14, 50, 3, 5, 6]

// acumulador é o valor anterior
const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior
  // se o anterior for menor que o atual, retorna o atual, 
  // caso contrário retorna o anterior
},0)

console.log(maiorValor)