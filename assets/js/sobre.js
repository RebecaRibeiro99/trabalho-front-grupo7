document.addEventListener("click",function(evento){
    if(!evento.target.matches(".link-botao"))return;
    evento.preventDefault();
    var elemento = document.getElementById(evento.target.name).offsetTop;
    // elemento.scrollIntoView()
    window.scrollTo({
        top:elemento - 110
    })
})