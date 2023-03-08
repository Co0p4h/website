console.log("suck my balls");

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("expanded");
});
