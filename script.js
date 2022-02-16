const navMenu = document.querySelector(".nav__menu");
const hamburger = document.querySelector(".hamburger-container");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
