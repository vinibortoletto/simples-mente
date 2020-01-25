const btnMenu = document.getElementById("btn__menu");
const navMenu = document.getElementById("nav__menu");

btnMenu.addEventListener("click", () => {
  navMenu.classList.add("open-menu");
});
