var x = 0;
var y = 0;
var obj = document.getElementById("div");
var oobj = document.getElementById("outradiv");

// w = 87
// a = 65
// s = 83
// d = 68
// cima = 38
// baixo = 40
// esquerda = 37
// direita = 39
function colisao(div1,div2){
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    return !(
        rect1.top > rect2.bottom ||
        rect1.bottom < rect2.top ||
        rect1.left > rect2.right ||
        rect1.right < rect2.left
    )
}
window.addEventListener("keydown", (event) => {
  var tecla = event.keyCode;
  
  if (tecla == "87") {
    y = y - 10;
    obj.style.top = y + "px";
  } else if (tecla == "65") {
    x = x - 10;
    obj.style.left = x + "px";
  } else if (tecla == "83") {
    y = y + 10;
    obj.style.top = y + "px";
  } else if (tecla == "68") {
    x = x + 10;
    obj.style.left = x + "px";
  }
  else if (tecla == "38") {
    y = y - 10;
    obj.style.top = y + "px";
  } else if (tecla == "37") {
    x = x - 10;
    obj.style.left = x + "px";
  } else if (tecla == "40") {
    y = y + 10;
    obj.style.top = y + "px";
  } else if (tecla == "39") {
    x = x + 10;
    obj.style.left = x + "px";
  }

  if(colisao(obj,oobj)){
    alert("Alcançou o objetivo!");
    location.reload()
  }

});

