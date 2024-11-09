const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const transferir = document.getElementById("btn_transferir");
const todosCursos = [...document.getElementsByClassName("curso")];

todosCursos.map((el) => {
  el.addEventListener("click", (e) => {
    const evt = e.target
    evt.classList.toggle("destaque");
  });
});


transferir.addEventListener('click',
()=>{
    const cursosSelec = [...document.querySelectorAll('.destaque')]
    const cursosnaoSelec = [...document.querySelectorAll('.curso:not(.destaque)')]
    cursosSelec.map(
        (el)=>{
            caixa2.appendChild(el)
        }
    )
    cursosnaoSelec.map(
        (el)=>{
            caixa1.appendChild(el)
        }
    )
}  
)
