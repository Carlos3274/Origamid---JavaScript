/* class Button {
  constructor(text, background) {
    this.text = text
    this.background = background
    return this.element()
  }
  // Button.prototype.element()
  element(){
    const buttonElement = document.createElement('button')
    buttonElement.innerText = this.text
    buttonElement.style.backgroundColor = this.background
    return buttonElement
  }
}

const blueButton = new Button('clique aqui', 'blue')
document.body.appendChild(blueButton.element())

 */


class Button {
  constructor(options) {
    this.options = options
  }
}


const blueButton = new Button({
  background: "blue",
  text: "clique aqui"
})
