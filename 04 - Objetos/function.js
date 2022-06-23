
const newObj = {
  nome: 'exemplo',

  darOi: function() {
    console.log('oi')
    console.log(this) // this -> newObj
  }
}


newObj.darOi()


function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe)
}

const ul = new Dom('ul')

const li = {
  element: document.querySelector('li'),
}

ul.ativo.call(li,'ativo')

const $ = document.querySelectorAll.bind(document) // pode passar os argumentos nesse momento e aí executa $()
                                                  // pode passar os argumentos apenas na hora de executar  $(arg1)
const exemplo = $('li') 



function imc(altura, peso) {
  return peso / (altura * altura)
}

const imc180 = imc.bind(null, 1.80)

console.log(imc180(70))