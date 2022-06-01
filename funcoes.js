function imc(peso, altura) {
  const imc = peso / altura**2
  console.log(imc)
  return imc
}

imc(66,1.77)

function corFavorita(cor){
  if(cor === 'azul') {
    return 'eu gosto do céu'
  } else if (cor === 'verde'){
    return 'Eu gosto de mato'
  } else {
    return 'Eu não gosto de cores'
  }
}

console.log(corFavorita())

addEventListener('click',function() {
  console.log('Acabei de clickar')
})

function terceiraIdade(idade) {

  if (typeof idade !== 'number')
    return 'Dados inválidos'

  else if(idade >= 60){
    console.log('É idoso')
    return true
  }

  else {
    return false
  }
}

terceiraIdade(60)

function faltaVisitar(paisesVisitaods) {
  var totalPaises = 193
  return `Faltam visitar ${totalPaises - paisesVisitaods} países.`
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')

function verificarSeTruthy(valor) {
  if ((typeof valor) == true) {
    return true
  } else {
    return false
  }
}

function perimetro(lado){
  return lado*4
}

function nomeCompleto(nome, sobrenome){
  tipoNome = typeof nome
  tipoSobrenome = typeof sobrenome

  if ((tipoNome !== 'string') || (tipoSobrenome !== 'string')) {
    return 'Dados inválidos, digite novamente'
  } else {
    return `Seu nome completo é ${nome} ${sobrenome}`
  
  }
}
// AULA 0205 FUNCOES 3