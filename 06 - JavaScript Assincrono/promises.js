/* const promesa = new Promise((resolve, reject) => {

  if(false) {
    resolve('foi resolvido') // o then será executado
  } else {
    reject(Error('Ocorreu um erro')) // o catch será executado
  }
})
 */

/* const retorno = promesa
.then(resolucao => 'Teste') // retorna 'Teste
.then(resolucao => {
  console.log(resolucao)
}).catch(rejeitada => {
  console.log('CATCH')
}) */

/* const retorno = promesa
.then(resolucao => {      // primeiro argumento do then (resolve)
  console.log(resolucao)
}, rejeitada => {         // segundo argumento do then (reject)
  console.log(rejeitada)
}).finally(() => {
  console.log('acabou')
}) */

/* const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados')
  }, 1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
  console.log(resolucao)
}) */

const promesa = new Promise(function(resolve, reject){
  if(true) {
    resolve('estou pronto')
  } else {
    reject()
  }
})

