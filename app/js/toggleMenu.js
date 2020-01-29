const btnMenu = document.getElementById("btn__menu");
const navMenu = document.getElementById("nav__menu");

const navLogo = document.querySelector(".nav__logo");
const navIcons = document.querySelectorAll(".nav__icon");

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("toggle-menu");
  btnMenu.classList.toggle("spin-menuBtn");

  navLogo.classList.toggle("toggle-menuIcon");

  navIcons.forEach(icon => {
    icon.classList.toggle("toggle-menuIcon");
  });
});
