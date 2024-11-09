function msg(){
    alert('Clicou mais não ganhou nada!!!')
}
const cursos = [...document.querySelectorAll('.curso')]
cursos.map((el)=>{
    el.addEventListener('click',
    ()=>{
        const e = el
        el.classList.add('destaque')
        console.log(el.id + ' Foi clicado')
    }
)
})