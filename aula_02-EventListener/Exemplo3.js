const corSelecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exibirSelecao");

//função para atualizar a cor exibida.
function atualizarCor()
{
    //atribui o valor da selção na variável
    const corSelecionadaValue = corSelecionada.value;
    
    exibirCor.textContent = `Cor selecionada: ${corSelecionada.value}`;

    //usar cor no estilo da div
    exibirCor.style.color = corSelecionadaValue;
}

//Adicionando ouvinte de evento change
corSelecionada.addEventListener('change', atualizarCor);