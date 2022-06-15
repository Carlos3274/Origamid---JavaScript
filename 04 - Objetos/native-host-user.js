// Liste 5 objetos nativos:
// Array, string, number, Object, boolean
// Objetos do browser
// HTMLCOllection, NodeList, HTMLElement, Window , Document

 // 2 métodos, propriedades ou objetos presentes no Chrome que não existem no firefox

 // 

//  const existe = (typeof window.CredentialsContainer !== "undefined")
//  console.log(existe)

// const transacao1 = 'Deṕosito do cliente'
// const transacao2 = 'Deṕosito do fornecedor'
// const transacao3 = 'Taxa de camisas'

// const preco = '99,00'
// console.log(transacao1.padEnd(50, '.'))
// console.log(transacao1.padStart(50, '.'))

// let listaItens = 'Camisa Bonés Calças Bermudas'
// listaItens = listaItens.replace(/[ ]+/g,', ')

// const htmlText = '<div> lorem ipslum </div>'
// const htmlArray = htmlText.split('div')
// const htmlNovo = htmlArray.join('section')

// EXERCICIOS

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99'
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  }
]
let taxaTotal = 0
transacoes.forEach(item => {
  const numeroLimpoStr = item.valor.replace('R$ ', '')
  const numeroLimpoNumber = +numeroLimpoStr
  if(item.descricao.slice(0,4) === 'Taxa'){
    taxaTotal += numeroLimpoNumber
  }
});

console.log(taxaTotal)

