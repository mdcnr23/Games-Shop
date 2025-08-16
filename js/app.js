let $ = document;

let header_icon = $.querySelector(".header_icon");
let header_icon_i = $.querySelector(".header_icon i");
const nav = $.querySelector(".nav");
let nav_bar_menu = $.querySelector(".nav_bar_menu");
let nav_logo = $.querySelector(".nav-logo");
const menu = document.querySelector(".menu"); // باکس شما
let isInTemporaryParent;

// ریسپانسیو منو
$.addEventListener("DOMContentLoaded", function () {
  isInTemporaryParent = menu.parentElement === nav_bar_menu;

  // تابع اصلی
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

  // اجرای اولیه
  moveBoxBasedOnWidth();

  // استفاده از requestAnimationFrame برای resize
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = requestAnimationFrame(moveBoxBasedOnWidth);
  });
});

header_icon.addEventListener("click", () => {
  if (header_icon_i.classList.contains("fa-bars")) {
    nav_bar_menu.style.left = "0";
    header_icon_i.classList = "fa fa-times";
  } else if (header_icon_i.classList.contains("fa-times")) {
    nav_bar_menu.style.left = "-256px";
    header_icon_i.classList = "fa fa-bars";
  }
});