// Base64 fuctions

function encriptar(elemento) {
    var palavra = document.getElementsByTagName("input")[0].value;
    var palavraCodificada = btoa(palavra);
    document.getElementById("output").innerHTML = palavraCodificada;
}

function desencriptar(elemento) {
    var palavra = document.getElementsByTagName("input")[0].value;
    var palavraCodificada = atob(palavra);
    document.getElementById("output").innerHTML = palavraCodificada;
}
// FIM Base64 fuctions

// Mostrar e esconder buttons 
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

// fim Mostrar e esconder buttons 
$(document).ready(function(){

    $('#select').on('change', function(){
        var selectValor = '#'+$(this).val();

        $('#pai').children('div').hide();
        $('#pai').children(selectValor).show();
    });
});
// Cesar 

// Fim Cesar