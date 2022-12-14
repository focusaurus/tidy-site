/* global document */
const nav = document.querySelector("nav.menu");
document
  .querySelector("button.open-nav")
  .addEventListener("click", () => nav.classList.toggle("open"));
document
  .querySelector("nav.menu")
  .addEventListener("click", () => nav.classList.remove("open"));
