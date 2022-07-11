// class Button {
//   constructor(text, background) {
//     this.text = text
//     this.background = background
//     return this.element()
//   }
//   // Button.prototype.element()
//   element(){
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = this.text
//     buttonElement.style.backgroundColor = this.background
//     return buttonElement
//   }
// }

// const blueButton = new Button('clique aqui', 'blue')
// document.body.appendChild(blueButton.element())



// class Button {
//   constructor(options) {
//     this.options = options
//   }
// }


// const blueButton = new Button({
//   background: "blue",
//   text: "clique aqui"
// })



// const button = {
//   get element() {
//     console.log('Operação de get')
//     return this._element
    
//   },
//   set element(tipo) {
//     console.log('Operação de set')
//     this._element = document.createElement(tipo)
//   }
// }

// const botao = {
//   get tamanho() {
//     return this._numero || 100 // se for undefined será 100
//   },
//   set tamanho(numero) {
//     this._numero = numero 
//   }
// }

// const frutas = {
//   lista: [],
//   set nova(fruta) {
//     this.lista.push(fruta)
//   }
// }

// frutas.nova = 'Banana' // métodos de get e set são acessados como se fossem uma propriedade

class Button {
  constructor(text, color) {
    this.text = text
    this.color = color
    // return this
  }

  get element() {
    const type = this._elementType || 'button'
    const buttonElement = document.createElement(type)
    buttonElement.innerText = this.text
    buttonElement.style.color = this.color
    return buttonElement
  }

  set element(type) {
    this._elementType = type
  }

  static createRed(text) {
    return new Button(text, 'red')
  }
}

const blueButton = new Button('Compre agora', 'blue')
blueButton.element = 'a'
console.log(blueButton.element)

const botaoVermelho = Button.createRed('compre agora')
console.log(botaoVermelho.element)

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas
  }
  acelerar() {
    console.log('acelerou')
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete){
  super(rodas) // não precisa colocar this.rodas = rodas
  this.capacete = capacete
  }
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas')
  }
  // é possível sobrescrever o acelerar()
  // também é possível reaproveitar o acelerar()
  acelerar() {
    super.acelerar()
    console.log('Acelerou muito!')
  }
}

const honda = new Moto(2, true)
honda.empinar()
honda.acelerar()

console.log(honda.capacete)
console.log(honda.rodas)