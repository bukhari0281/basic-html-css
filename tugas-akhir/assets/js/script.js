const menu_bar = document.querySelector(".menu-bar");
const menu_nav = document.querySelector(".nav-menu");

menu_bar.addEventListener("click", function() {
    menu_nav.classList.toggle("menu-active");
})

