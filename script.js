"use strict";
let test;
const toggleMenu = (e) => {
  test = e.target;
  if (e.target.classList.contains("dropdown-container")) {
    return;
  }
  
  // Select the closest dropdown container and get the menu element.
  const menu = e.target.closest(".dropdown-selector").querySelector(".dropdown-menu");
  menu.classList.toggle("clicked");
}

const dropdownMenu = (() => {
  const container = document.querySelector(".dropdown-container");
  container.addEventListener("mouseover", toggleMenu);
  container.addEventListener("mouseout", toggleMenu);
})();