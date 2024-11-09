var corredor = document.querySelector('.corredor')
var final = document.querySelector('.final')

var x = 0
var y = 0
var velocidade = 10
var parado = null

// w = 87
// a = 65
// s = 83
// d = 68
// cima = 38
// baixo = 40
// esquerda = 37
// direita = 39


function colisao(div1,div2){
    const rct1 = div1.getBoundingClientRect()
    const rct2 = div2.getBoundingClientRect()

    return !(
        rct1.left > rct2.right ||
        rct2.left > rct1.right 
    )
}

window.addEventListener('keydown',
    (e)=>{
        var t = e.keyCode
        if(t==68 || t==39){
            corredor.src = 'corredor.gif'
            x = x + velocidade
            corredor.style.left = x + 'px'
        }else if(t==65 || t==37){
            corredor.src = 'corredor.gif'
            x = x - velocidade
            corredor.style.left = x + 'px'
        }
        if(colisao(corredor,final)){
            alert('chegou a linha de chegada!')
            location.reload()
        }
        clearTimeout(parado)
        parado= setTimeout(
            ()=>{
                corredor.src = 'corredorparado.png'
            },600
        )
    }
)

