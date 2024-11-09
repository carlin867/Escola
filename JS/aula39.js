const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)
console.log(c1_2.parentElement.parentNode.children[4])

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(btn_c[0].children.length > 0 ? 'tem filhos' :'não possui filhos')

console.log(caixa1.firstElementChild)
console.log(caixa1.children[0].innerHTML = 'TESTE')

// if(caixa1.children.length > 0){
//     console.log('possui filhos')
// }else{
//     console.log('não possui filhos')
// }