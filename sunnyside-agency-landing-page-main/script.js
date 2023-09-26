const hamburguer = document.querySelectorAll(".menu");

hamburgue.forEach(menu => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
    })
})