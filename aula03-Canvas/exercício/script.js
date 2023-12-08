/* canvas = document.querySelector("canvas");

canvas.width = 800;
canvas.height = 600;

c = canvas.getContext('2d');


c.fillstyle = "dark";
c.fillRect(x, y, 50, 50);

const visor = document.querySelector('#visor');

document.addEventListener('keydown',(event) =>{
   
})*/

canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 600;
c = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height / 2;
var quadrado = 50;

desenhar()

function desenhar(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillRect(x, y, quadrado, quadrado);
}

document.addEventListener('keydown', (event) =>{
    if(event.key === "a" || event.key === "A")
    {
        if (x > 0){
          x -= 10;
            desenhar();
        }
    }
    else if(event.key === "d" || event.key === "D")
    {
        if(x + quadrado < canvas.width){
          x += 10;
        desenhar();  
        }
        
    }
    else if(event.key === "w" || event.key === "W")
    {
       if (y > 0) {
        y -= 10;
        desenhar();
       } 
    }
    else if(event.key === "s" || event.key === "S")
    {
        if(x + quadrado < canvas.height){
            y += 10;
        desenhar();
        }
        
    }
})