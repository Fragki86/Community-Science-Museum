const hamBtn = document.querySelector(".ham");
const nav = document.querySelector("#nav");

hamBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-m");
})