const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]
console.log(objs1)
console.log(objs2)

objs2.forEach(element => {
    element.innerHTML = "Curso"
});