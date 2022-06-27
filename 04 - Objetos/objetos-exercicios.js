// crie uma função que verifique corretamente o tipo de dado


function verificarTipoDeDado(object) {
  return Object.prototype.toString.call(object).replace('object ','')
}

// crie um objeto quadreado com propriedades lados e torne ela imutável

const quadrado = {
  lados: 4,
}

Object.freeze(quadrado)

// Previna mudança no objeto abaixo

const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

// Liste o nome de todas as propriedades do prototype de String e Array
console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))


