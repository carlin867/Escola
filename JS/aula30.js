const c1 =document.getElementById('c1')
const c2 =document.getElementById('c2')
const c3 =document.getElementById('c3')
const c4 =document.getElementById('c4')
const c5 =document.getElementById('c5')
const c6 =document.getElementById('c6')

const arrayElementos = [c1,c2,c3,c4,c5,c6]
// console.log(arrayElementos)
// for(i=0;i<arrayElementos.length;i++){
//     console.log(arrayElementos[i].innerHTML)
//     arrayElementos[i].innerHTML='Carlos'
// }
arrayElementos.map((e)=>{
    console.log(e.innerHTML)
    e.innerHTML = "Carlos Augusto"
})