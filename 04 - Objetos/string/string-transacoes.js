// Some os valores de taxa e recebimento

const transacoes= [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento do Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento do Cliente',
    valor: 'R$ 49'
  }
]
let total = 0
let totalTaxa = 0
let totalRecebimento = 0
transacoes.forEach(item => {
  const numeroLimpo = item.valor.slice(3,6)
  const numero = +numeroLimpo
  const descricaoAux =  item.descricao.slice(0,4)


  if(descricaoAux === "Taxa") {
    totalTaxa += numero
  }
  if(descricaoAux === "Rece") {
    totalRecebimento += numero
  }
  
  total += numero
});

console.log(`O total é R$${total},00`)
console.log(`As taxas são R$${totalTaxa},00`)
console.log(`Os recebimentos foram R$${totalRecebimento},00`)



