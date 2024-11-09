function canal(){
    let n1 = 12
    let n2 = 134
    let res = n1 * n2
    if(res % 2 == 0){
        return 'par '
    }else{
        return 'impar '
    }
    
}
let num = canal()
console.log(num)