const menu = document.getElementById("menu");

document.getElementById("menu-open").addEventListener("click", function () {
    menu.removeAttribute("hidden");
    menu.classList.add("open");
});

document.getElementById("menu-close").addEventListener("click", function () {
    menu.toggleAttribute("hidden");
    menu.classList.remove("open");
});
