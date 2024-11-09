const cursoTodos = [...document.getElementsByClassName('curso')]
const curso1 = [...document.getElementsByClassName('classe1')]
const curso2 = [...document.getElementsByClassName('classe2')]
const cusrsoEspecial = document.getElementsByClassName('curso')[4]
console.log(cursoTodos)
console.log(curso1)
console.log(curso2)
console.log(cusrsoEspecial)
curso2.map((e)=>{
    e.classList.add('destaque')
})