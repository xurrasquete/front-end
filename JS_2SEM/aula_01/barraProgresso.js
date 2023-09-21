function animarBarraProgresso()
{
    //Declarando as variáveis e atribuindo ps valores através dos elementos de DOM
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraPogresso =$(".progress");

    var intervalo = setInterval(function(){
        if (progresso > 100)
        {
            clearInterval(intervalo);
            barraPogresso.hide();
            document.body.style.backgroundImage = `url(https://images.pexels.com/photos/17904851/pexels-photo-17904851/free-photo-of-abstrato-resumo-abstrair-arte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
        }
        else {
            progresso++;
            barra.css("width", progresso + "%");
        }
    },50);
}