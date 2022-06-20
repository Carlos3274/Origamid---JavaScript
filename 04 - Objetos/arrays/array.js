// EXERCICIOS 
const comidas = ['Pizza','Frango', 'Carne', 'Macarrão']

const primeiroComidas = comidas.shift()
const ultimoComidas = comidas.pop()

comidas.push('Arroz')
comidas.unshift('Peixe','Batata')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

estudantes.sort()
estudantes.reverse()
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))

let html = `<section>
    <div>Sobre</div>
    <div>Produtos</div>
    <div>Contato</div>
  </section>`

console.log(html.split('section').join('ul').split('div').join('li'))

const carros = ['Ford', 'Fiat', 'VW', 'Honda']
const carrosClone = carros.slice()
carros.pop()





