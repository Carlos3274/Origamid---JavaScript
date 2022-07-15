// reescreva a função utilizando 
// valores iniciais de parametros com ES6

function createButton(background = 'blue', color = 'red') {

  const buttonElement = document.createElement('button')
  buttonElement.style.background =  background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton()
document.body.appendChild(redButton)

// utilizando o método push ara inserir as frutas ao final de comidas

const frutas = ['Banana', 'Uva', 'Morango']
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)
console.log(comidas)