let $ = document;

let hamburgerMenu = $.querySelector(".hamburger-menu");
let hamburgerMenu_i_Element = $.querySelector(".hamburger-menu i");
const nav = $.querySelector(".nav-menu");
let nav_bar_menu = $.querySelector(".options-bar");
let nav_logo = $.querySelector(".nav-logo");
const menu = document.querySelector(".main-menu");
let isInTemporaryParent;

// Responsive Menu
$.addEventListener("DOMContentLoaded", function () {
  isInTemporaryParent = menu.parentElement === nav_bar_menu;

  function moveBoxBasedOnWidth() {
    if (window.innerWidth < 769) {
      if (!isInTemporaryParent) {
        nav_bar_menu.appendChild(menu);
        nav_bar_menu.style.justifyContent = "flex-end";
        isInTemporaryParent = true;
      }
    } else {
      if (isInTemporaryParent) {
        nav.appendChild(menu);
        nav_bar_menu.style.justifyContent = "space-between";
        isInTemporaryParent = false;
      }
    }

    if (window.innerWidth > 992) {
      nav.insertBefore(menu, nav_logo.nextSibling);
      nav_bar_menu.style.justifyContent = "flex-end";
    }
  }

  moveBoxBasedOnWidth();

  // Using requestAnimationFrame to resize
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = requestAnimationFrame(moveBoxBasedOnWidth);
  });
});

// Hamburger menu
hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu_i_Element.classList.contains("fa-bars")) {
    nav_bar_menu.style.left = "0";
    hamburgerMenu_i_Element.classList = "fa fa-times";
  } else if (hamburgerMenu_i_Element.classList.contains("fa-times")) {
    nav_bar_menu.style.left = "-256px";
    hamburgerMenu_i_Element.classList = "fa fa-bars";
  }
});