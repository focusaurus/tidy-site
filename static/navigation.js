/* global document */
const nav = document.querySelector("nav.menu");
const buttonOpenNav = document.querySelector("button.open-nav");
buttonOpenNav.addEventListener("click", () => {
  nav.classList.toggle("open");
  buttonOpenNav.classList.toggle("open");
});
document.querySelector("nav.menu").addEventListener("click", () => {
  nav.classList.remove("open");
  buttonOpenNav.classList.toggle("open");
});
