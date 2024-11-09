const divTodos = [...document.getElementsByTagName('div')]
const cursoTodos = [...document.getElementsByClassName('curso')]
const curso1 = [...document.getElementsByClassName('classe1')]
const curso2 = [...document.getElementsByClassName('classe2')]
const cursoEspecial = document.getElementById('c1')
const query_divTodas = [...document.querySelectorAll('div[class]')]
const query_cursoTodos = [...document.querySelectorAll('.curso')]
const query_cursosC1 = [...document.querySelectorAll('.classe1')]
const query_cursosC2 =[...document.querySelectorAll('.classe2')]
const query_pDiv = [...document.querySelectorAll('div>p')]

console.log(query_pDiv)
console.log(query_cursosC2)
console.log(query_cursosC1)
console.log(query_divTodas)
console.log(query_cursoTodos)

// console.log(divTodos)
// console.log(cursoTodos)
// console.log(curso1)
// console.log(curso2)
// console.log(cursoEspecial)

// curso2.map((e)=>{
//     e.classList.add('destaque')
// })