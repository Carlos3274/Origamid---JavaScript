// retorne a quantidade de taxas

const transacoes = ['Taxa do Banco','   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial']

let quantidade = 0
transacoes.forEach(item => {
  let stringLimpa = item.toLowerCase()

  if(stringLimpa.includes('taxa')) {
    quantidade++
  }
});

console.log(quantidade)
