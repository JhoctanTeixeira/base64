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
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}
var string = "DevPleno"
var emBase64 = btoa(string)
console.log(emBase64)

var deBase64 = atob(emBase64)
console.log(deBase64)