"use strict";
let test;
const toggleMenu = (e) => {
  if (e.target.classList.contains("dropdown-container")) {
    return;
  }
  
  const menu = e.target.closest(".dropdown-selector");
  menu.children[1].classList.toggle("clicked");
}

const dropdownMenu = (() => {
  const container = document.querySelector(".dropdown-container");
  container.addEventListener("mouseover", toggleMenu);
  container.addEventListener("mouseout", toggleMenu);
})();