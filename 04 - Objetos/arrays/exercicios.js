// selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


const cursos = document.querySelectorAll('.curso')
const cursosArray = Array.from(cursos)
console.log(cursosArray)
console.log(cursosArray[0].children[0].innerHTML)
console.log(cursosArray[0].children[1].innerHTML)
console.log(cursosArray[0].children[2].innerHTML)
console.log(cursosArray[0].children[3].innerHTML)

let obj = {
  titulo: '',
  descricao: '',
  aulas: '',
  horas: '',
}

cursosArray.map((item,index) => {
  obj = 
})



