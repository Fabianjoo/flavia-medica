/* MENU MOBILE */

var menu_botao = document.getElementById("hamburguer")
var menu_lateral = document.getElementById("menu_mobile")

menu_botao.addEventListener("click", function() {
    menu_lateral.classList.toggle("ativar");

    if (menu_lateral.classList.contains('ativar')) {
        menu_botao.textContent = 'close'; // troca para "X"
    } else {
        menu_botao.textContent = 'menu'; // volta para hambúrguer
    }
})
