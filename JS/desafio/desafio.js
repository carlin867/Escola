function clickBotao() {
    var nome = document.getElementById("inome").value;
    var sobrenome = document.getElementById("isobrenome").value;
    var r = document.getElementById("res");
    var cpf = document.getElementById("icpf").value;

    if(nome.length == 0 && sobrenome.length == 0) {
        alert('Campo Vazio, Digite Algo Neles!');
    }
    else {
        r.innerHTML = `Olá ${nome + " " + sobrenome} <br>`;
        r.innerHTML += `Seu nome possui ${nome.length + sobrenome.length} letras`
        r.innerHTML += `Seu CPF é ${cpf}`
    }
}