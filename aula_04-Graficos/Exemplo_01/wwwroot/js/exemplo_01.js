//dados ´para o gráfico
var dados = {
    //rotulos do gráfico
    labels : ['janeiro', 'fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    //propriedades do gráfico
    datasets: [{
        label: 'Vendas Mensais',
        backgroundColor: 'rgba(76, 193, 192, 0.6)',
        borderColor: 'rgba(0, 191, 150, 1)',
        borderWidth: 1,
        data: [3, 25, 15, 19, 16, 27]
    },
    {
        label: 'vendas 2022',
        borderWidth: 1,
        data: [3,6,20, 5, 14, 8]
    },
    {
        label: 'Vendas 2023',
        backgroundColor: 'rgba(76, 193, 192, 0.6)',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [12, 19, 3, 5, 2, 5]
    }
]
};

//configuração do gráfico
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

//criar o grafico de barras 
var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: dados,
    options: options
})
