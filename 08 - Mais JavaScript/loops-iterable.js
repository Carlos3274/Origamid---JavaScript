const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isto é JavaScript'

for(const fruta of frutas) {
  console.log(fruta)
}

// objeto não iterável usas-se for in

const carro = {
  marca: 'Honda',
  ano: 2018,
}


for(const key in carro) {
  console.log(key, carro[key])
}

const btnUnico = document.querySelector('button')
const btnStyles = getComputedStyle(btnUnico)

