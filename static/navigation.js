/* global document */
function closeNav() {
  nav.classList.remove("open");
}
const nav = document.querySelector("nav.menu");
document
  .querySelector("button.open-nav")
  .addEventListener("click", () => nav.classList.toggle("open"));
document.querySelector("button.close-nav").addEventListener("click", closeNav);
document.querySelector("nav.menu").addEventListener("click", closeNav);
window.addEventListener("hashchange", closeNav);
