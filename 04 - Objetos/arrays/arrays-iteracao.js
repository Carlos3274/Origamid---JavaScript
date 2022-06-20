// maior valor de um array com reduce

const numeros = [14, 50, 3, 5, 6]

// acumulador é o valor anterior
const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior
  // se o anterior for menor que o atual, retorna o atual, 
  // caso contrário retorna o anterior
},0)

console.log(maiorValor)


// reduce pode retornar objetos a cada iteração 
aulas = [
  {
    nome: 'JS 1',
    min: 25,
  },
  {
    nome: 'Java',
    min: 40,
  },
  {
    nome: 'POO',
    min: 8,
  },
  {
    nome: 'NodeJS',
    min: 4,
  },
]

var acumulador = {}
acumulador[0] = 'teste'

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome
  return acumulador
}, {})

console.log(listaAulas)



