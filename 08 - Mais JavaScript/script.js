function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = text
    return buttonElement
  }
  return {
    element: element,    // O objeto ao ser criado herdará a função element e a propriedade text
    text: text,          
  }
}

const comprarBtn = createButton('Comprar')

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}` // variável privada

  

}