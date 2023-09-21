//Seleciondo botão pelo ID
const botaoAumentar = document.querySelector('#Aumentar');
const botaoDiminuir = document.querySelector('#Diminuir');
const botaoZerar = document.querySelector('#Zerar');
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
botaoAumentar.addEventListener("click", contando);

function diminuir()
{
    if (contador <= 0){
         alert("Não é possível diminuir mais!")
         return
    }
    
    contador--;
    contadorElemento.textContent = contador;
}

//Adicionando ouvintes do evente de click
botaoDiminuir.addEventListener("click", diminuir);

function zerar()
{
    contador = 0;
    contadorElemento.textContent = contador;
}

//Adicionando ouvintes do evente de click
botaoZerar.addEventListener("click", zerar);