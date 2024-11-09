const div = [...document.querySelectorAll('[conte]')]
const animation_class = 'animate'

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
  const processChange = debounce(() => saveInput());

function animeScroll(){
    const scrollTop = window.scrollY + ((window.innerHeight*3)/4)
    div.forEach(
        (e,i)=>{
            if((scrollTop) > e.offsetTop){
                e.classList.add('animate')
            }else{
                e.classList.remove('animate')
            }
            
        }
    )
}

animeScroll()


if(div.length){
    window.addEventListener('scroll',
    debounce(()=>{
        animeScroll()
    })
)
}else{
    console.log('div não encontrado')
}
