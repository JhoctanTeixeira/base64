// MinhaPrimeiraFuncao("Javascript is so easy to learn");

// function MinhaPrimeiraFuncao(msg){
//     alert("A mensagem foi enviada: "+msg);
// }

function Enviar() {
    var nome = document.getElementById("nameid");

    if (nome.value != "") {
        alert('Obrigado sr()a ' + nome.value + 'os seus dados foram encaminhados com sucesso')
    }
}