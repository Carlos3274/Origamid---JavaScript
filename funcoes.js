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
  return !!valor
}
//OK
function perimetro(lado){
  return lado*4
}
// OK
function nomeCompleto(nome, sobrenome){
  tipoNome = typeof nome
  tipoSobrenome = typeof sobrenome

  if ((tipoNome !== 'string') || (tipoSobrenome !== 'string')) {
    return 'Dados inválidos, digite novamente'
  } else {
    return `Seu nome completo é ${nome} ${sobrenome}`
  
  }
}
// OK
function verficaPar(numero){
  if(numero % 2 === 0) {
    return true
  } else {
    return false
  }
}

function tipoDado(dado) {
  console.log(typeof dado)
}

// mostrar meu nome completo quando o scroll ocorrer

addEventListener('scroll',function() {
  console.log('José Carlos Araúujo Pontes')
})

function precisoVisitar(paisesVisitados){
  var totalPaises = 193
  return ``
}

var totalPaises = 193
function jaVisitei(paisesVisitados) {
  return `Já vistei ${paisesVisitados} do total de ${totalPaises} países.`
}