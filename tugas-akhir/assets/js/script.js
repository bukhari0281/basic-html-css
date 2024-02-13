const menu_nav = document.querySelector(".navbar-nav");
const menu_bar = document.querySelector("#menu-bar");

document.querySelector("#menu-bar").onclick = () => {
    menu_nav.classList.toggle("active");
}

document.addEventListener("click", function(e) {
    if (!menu_nav.contains(e.target) && !menu_bar.contains(e.target)) {
        menu_nav.classList.remove("active");
    }
})
