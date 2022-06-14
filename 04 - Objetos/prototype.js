
// function Teste (number, name) {
//   this.number = number
//   this.name = name
// }

// Teste.prototype.testar = function(){
//   return 'Estou testando'
// }

// const testeA = new Teste(1,'ok')

// EXERCICIOS
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.idade = idade
}

Pessoas.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome
}

const joao = new Pessoas('João','Oliveira', 23)
console.log(joao.nomeCompleto())

// Métodos acessados por Node List:
/*
entries: ƒ entries()
forEach: ƒ forEach()
item: ƒ item()
keys: ƒ keys()
length: (...)
values: ƒ values()
constructor: ƒ NodeList()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.toStringTag): "NodeList"
get length: ƒ length()
*/
// Métodos acessados por HTMLcollection
/*
item: ƒ item()
length: (...)
namedItem: ƒ namedItem()
constructor: ƒ HTMLCollection()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.toStringTag): "HTMLCollection"
get length: ƒ length()
*/
// Métodos e propriedades acessados por Document
/*
São muitos kkkk
*/

// Liste os construtores dos dados abaixo
// const li = document.querySelector('li')

// // li - HTMLLIElement()
// // li.click  - Function() 
// // li.innerText - String()


const li = document.querySelectorAll('li')


