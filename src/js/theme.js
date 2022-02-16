var currentTheme = localStorage.getItem("theme") || "light";

if (["dark", "light"].includes(currentTheme)) {
    document.documentElement.setAttribute("theme", currentTheme);
}
