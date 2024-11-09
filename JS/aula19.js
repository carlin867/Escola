let n=0
let max=1000
let pares = 0
for(let i=n;i<max;i++){
    console.log(`O programa se repetiu ${i} vezes`)
    if(i%2 !== 0){
        continue
    }
    pares++
}
console.log(`Até agora foram encontradas ${pares} pares.`)