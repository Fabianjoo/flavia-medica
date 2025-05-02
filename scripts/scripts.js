/* MENU LATERAL */

var menu = document.getElementById("hamburguer")
var menu_lateral = document.getElementById("menu_mobile")

menu.addEventListener("click", function() {
    menu_lateral.classList.toggle("ativar");
})
