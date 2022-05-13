document.addEventListener("click",function(evento){
    if(!evento.target.matches(".link-botao"))return;
    evento.preventDefault();
    var elemento = document.getElementById(evento.target.name).offsetTop;
    window.scrollTo({
        top: elemento - 110
    })
})