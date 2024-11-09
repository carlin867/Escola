var pos = [...document.querySelectorAll('.img_jog')];
var modal = [...document.querySelectorAll('.modal')];
var res = [...document.querySelectorAll('.reserva')];

pos.forEach((e, i) => {
    e.addEventListener('click', () => {
        modal[i].showModal();
    });
});

modal.forEach((e, i) => {
    e.addEventListener('click', () => {
        e.close();
    });

    var rese = [...modal[i].querySelectorAll('.reserva')];
    rese.forEach(
        (e)=>{
            e.addEventListener('click',
                ()=>{
                    pos[i].src = e.src
                    checkImages()
                }
            )
        }
    )
});

function checkImages() {
    if (pos[0].src.endsWith('curry-pos.png') &&
        pos[1].src.endsWith('jabbar-pos.png') &&
        pos[2].src.endsWith('lebron-pos.png') &&
        pos[3].src.endsWith('west-pos.png') &&
        pos[4].src.endsWith('kobe-pos.png')) {
        location.href = 'https://github.com/carlin867'
    }
}
checkImages()


