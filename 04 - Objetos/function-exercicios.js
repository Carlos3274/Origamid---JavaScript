// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p')
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  
  return acumulador + item.outerText.length
},0)

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos html, com os seguintes parametros
// tag, classe e conteudo

function newElement(tag, classe, content) {
  const elemento = document.createElement(tag)

  classe ? elemento.classList.add(classe) : null
  classe ? elemento.innerHTML = content : null
 
  return elemento
}



// crie uma nova função utilizando a anterior como base
// essa nova funçao deverá sempre criar h1 com a classe titulo , porem o parametro conteudo continuará dinamico

function criarTitulo(content) {
  return newElement('h1','titulo', content)
}



const criarTituloComBind = newElement.bind(null,'h1','titulo')










