const soma=(...valores)=>{
    const somar=val=>{
        let res = 0
        for(v of val){
            res+=v
        }
        return res
    }
    return somar(valores)
}
console.log(soma(10,6,4,3,4,5))
valor = [10,5,6,43]
console.log(soma(...valor))