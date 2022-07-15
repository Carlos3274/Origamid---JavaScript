// setar um valor padrão caso o argumento seja indefinido

/* function perimetroForma(lado, totalLados) {
  totalLados = totalLados || 4; // caso undefined, use '4'
  return lado * totalLados;
} */

// no ES6 pe possível fazer assim:

function perimetroForma(lado, totalLados = 4) {
  return lado * totalLados;
}

// palabra-chave arguments, arguments é um array-like

function perimetro(lado, totalLados = 3) {
  const argArray = Array.from(arguments);

  return lado * totalLados;
}    
  
// parâmetro Rest 

function perimetroTeste(lados, totalLados, ...listaArgumentos) {
  console.log('rest: '+listaArgumentos);
  console.log(arguments)
  return lados * totalLados;
}

perimetroTeste(4,5,'oi',false,'ok');

// spread - utiliza o mesmo princípio do '...'

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', 'Hamburguer', ...legumes];
console.log(comidas)

// spread como argumento
const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximo = Math.max(...listaNumeros)
console.log(numeroMaximo)

// transformar em Array

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];
console.log(btnsArray)

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
