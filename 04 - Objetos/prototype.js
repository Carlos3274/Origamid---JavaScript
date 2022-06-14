
function Teste (number, name) {
  this.number = number
  this.name = name
}

Teste.prototype.testar = function(){
  return 'Estou testando'
}

const testeA = new Teste(1,'ok')
