//5! = 5 x 4 x 3 x 2 x 1 = 120
let nd = prompt('Digite um número: ')
let fa = Number(nd);
let n = 1;
let res = 1; 
let r = document.getElementById('res')

while (n <= fa) {
    res *= n; 
    n++;
}

r.innerHTML = `O número digita foi ${nd} e o seu fatorial foi ${res}`