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
// $(document).ready(function(){

//     $('#select').on('change', function(){
//         var selectValor = '#'+$(this).val();

//         $('#pai').children('div').hide();
//         $('#pai').children(selectValor).show();
//     });
// });
// Cesar 

// Fim Cesar

const st = {};

st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');

st.choice1 = document.querySelector('#choice1');
st.choice2 = document.querySelector('#choice2');

st.flap.addEventListener('transitionend', () => {

    if (st.choice1.checked) {
        st.toggle.style.transform = 'rotateY(-15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
    } else {
        st.toggle.style.transform = 'rotateY(15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
    }

})

st.clickHandler = (e) => {

    if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
            st.flap.children[0].textContent = e.target.textContent;
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
});

document.addEventListener('click', (e) => st.clickHandler(e));