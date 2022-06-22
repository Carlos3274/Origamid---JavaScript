// selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso')
const cursosArray = Array.from(cursos)

const objetosCurso = cursosArray.map(curso => {
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText
  return {
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas: horas
  }
})

console.log(objetosCurso)

console.log('----------------------------------------')
// retorne uma lista com os números maiores  que 100
const numeros = [3, 44, 33, 23, 122, 322, 33]

const majorThan100 = numeros.filter(item => {
  return item > 100
})

console.log(majorThan100)
console.log('-----------------------------------------')
// verifique se baixo faz parte da lista de instrumentos e retorna true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const hasBaixo = instrumentos.some(item => {
  return item === 'Baixo'
})

console.log(hasBaixo)
console.log('----------------------------------------------')
// retorne o valor total das compras

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Pera',
    preco: 'R$ 7,99'
  },
  {
    item: 'Melancia',
    preco: 'R$ 6,00'
  },
  {
    item: 'Maçã',
    preco: 'R$ 3,99'
  }
]



/* const listaCompras = compras.reduce((acumulador, compra, index) => {
  const stringLimpa = (acumulador[index] = compra.preco.replace('R$ ', '').replace(',','.'))
  let number = parseFloat(stringLimpa)
  totalCompras += number
  return acumulador
}, {})

console.log(totalCompras)
console.log(listaCompras) */
const totalCompras = 0
const listaCompras = compras.reduce((acumulador, compra, index) => {
  const precoLimpo = +compra.preco.replace('R$ ','').replace(',','.')
  return acumulador + precoLimpo
},0)

console.log(listaCompras)
