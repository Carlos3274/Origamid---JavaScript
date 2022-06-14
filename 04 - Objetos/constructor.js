
/* function Pessoa(nome, idade) {
  this.nome = nome,
  this.idade = idade,

  this.andar = function() {
    console.log(this.nome + ' andou')
  }
} */

function Dom(seletor){
  this.element = function() {
    return document.querySelectorAll(seletor)
  }
  const elementos = this.element()

  this.addClass = function(classe) {
    elementos.forEach(elemento => {
      elemento.classList.add(classe)
    });
  }

  this.removeClass = function(classe){
    elementos.forEach(elemento => {
      elemento.classList.remove(classe)
    });
  }

}
const li = new Dom('li')




