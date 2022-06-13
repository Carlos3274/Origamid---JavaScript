

var eu = {
  nome: 'Zeca',
  sobrenome: 'Araujo Pontes',
  idade: 21,
  fazFaculdade: true,

  showNameComplet: function(){
    return `Seu nome completo é ${this.nome} ${this.sobrenome}.`
  }
}

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

var cachorro = {
  raca : 'Labrador',
  cor: 'preto',
  idade: 10,

  viuHomem(){
    return 'Latiu!!!'
  }
}