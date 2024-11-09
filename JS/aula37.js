const caix1 = document.getElementById('caixa1')
const btn_c1 = document.getElementById('c1')
const cursos = [...document.getElementsByClassName('curso')]

caix1.addEventListener('click',
    (evt)=>{
        console.log(evt.target)
    }
)
cursos.map((el)=>
    el.addEventListener('click',
    (evt)=>{
        evt.stopPropagation()
        console.log('Clicou')
    }
)
)
