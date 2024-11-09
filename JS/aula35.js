const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const botao1 = document.getElementById("btn_copiar");
const botao2 = document.getElementById("btn_voltar");
const todosCursos = [...document.getElementsByClassName("curso")];

todosCursos.map((el) => {
  el.addEventListener("click", (e) => {
    const evt = e.target
    evt.classList.toggle("destaque");
  });
});

botao1.addEventListener('click',
    ()=>{
        const cursosSelec = [...document.getElementsByClassName('destaque')]

        cursosSelec.map(
            (el)=>{
                caixa2.appendChild(el)
            }
        )
    }  
)
botao2.addEventListener('click', () => {
    const cursosSelec = [...document.getElementsByClassName('destaque')];
    cursosSelec.map((el) => {
        caixa1.appendChild(el);
        el.classList.remove("destaque");
    });
    });
