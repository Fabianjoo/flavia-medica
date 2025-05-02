/* MENU LATERAL */

var menu_botao = document.getElementById("hamburguer")
var menu_lateral = document.getElementById("menu_mobile")

menu_botao.addEventListener("click", function() {
    menu_lateral.classList.toggle("ativar");
})
