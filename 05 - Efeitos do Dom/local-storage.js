const configuracoes = {
  player: "Google API",
  tempo: 25.5,
  aula: "2-1 JavaScript",
  vitalicio: true,
}

console.log(JSON.stringify(configuracoes)) // isso é uma string parecida com JSON

localStorage.configuracoes = JSON.stringify(configuracoes) // Estoou salvando no local storage a string parecida com JSON

// ESSA é uma alternativa melhor doq fazer loop no local storage para manipular os valores. Melhor salvar tudo numa string Json like e depois extrair e manipular.

let objJson = JSON.parse(localStorage.configuracoes)
console.log(objJson)
