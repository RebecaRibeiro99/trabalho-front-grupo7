const botao = document.querySelector(".btn-menu");
const navegacao = document.querySelector(".navegacao");
var menuAberto = false;
botao.addEventListener("click", function () {
  menuAberto = !menuAberto;
  botao.classList.toggle("active");
  if (menuAberto) {
    navegacao.classList.add("menu-active");
  } else {
    navegacao.classList.remove("menu-active");
  }
});
