// fetch('./dados.json')
// .then(r=> r.json())
// .then((body) => {
//   console.log(body[0].id)
// })
// // Requisições HTTP
// site que finge que vc tem uma API:
// const url = 'https://jsonplaceholder.typicode.com/posts'
// const options= {
//   method: 'POST',
//   body: '{"title": "JavaScript"}',
//   headers: {
//     "Content-Type": "aplication/json; charset=utf-8"
//   }
// }

// fetch(url, options)
// .then(response => response.json())
// .then(json => console.log(json))

// ASYNC AWAIT com try/catch
// async function puxarDados() {
//   try {
//   const dadosResponse = await fetch('./dados.json')
//   const dadosJSON = await dadosResponse.json()

//   document.body.innerText = dadosJSON.titulo
//   } catch(erro) {
//     console.log(erro)
//   }  
  
// }

// 

async function iniciarAsync() {
  const dadosResponse = fetch('./dados.json')
  const dadosJSON = await (await dadosResponse).text() 
  document.body.innerText = dadosJSON
  // espera o que está dentro da expressão ocorrer primeiro

}

iniciarAsync()