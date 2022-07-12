// exemplo de factory function

function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = text
    return buttonElement
  }

  return {
    element, // o objeto irá herdar o método element e a propriedade text
    text
  }
}

const btnComprar = createButton('Comprar')
const btnVender = createButton('Vender')

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}` // variável privada

  function andar() {
    return nomeCompleto + ' andou'
  }

  function nadar() {
    return nomeCompleto + ' nadou'
  }

  return Object.freeze({
    nome,
    sobrenome,
    andar,
    nadar
  })
}

const joao = criarPessoa('João', 'Alves')
console.log(joao.andar()) //

// constructor function sem New

function People(name) {
  if(!(this instanceof Pessoa)) {
    return new Pessoa
  }
  this.name = name
}

const designer = new People('André')
