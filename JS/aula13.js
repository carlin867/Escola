let energia = 50
let clima = "chuva"

if(energia > 70 && clima == "sol"){
    console.log("Vou para a praia!")
}else if(energia >= 50 &&  clima == "chuva" || clima == "limpo"){
   console.log("Vou para o Cinema!")
}else{
    console.log("Vou ficar em casa!")
}