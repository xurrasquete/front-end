//Seleciondo botão pelo ID
const botao = document.querySelector('button');
const contadorElemento = document.querySelector('#contador')

//inicializando contador 
let contador = 0;

//função que sera chamada pelo enventListener
function contando()
{
    contador++;
    contadorElemento.textContent = contador;
}

//Adicionando ouvintes do evente de click
botao.addEventListener("click", contando);