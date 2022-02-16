document.getElementById("theme-toggle").addEventListener("click", function () {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    document.documentElement.classList.add("theme-in-transition");
    setTimeout(function () {
        document.documentElement.classList.remove("theme-in-transition");
    }, 750);
    document.documentElement.setAttribute("theme", currentTheme);
});
