"use strict";
// * Модуль управлeния меню

window.menuButton = (function () {

  var nav = document.querySelector(".navigation");
  var navToggler = nav.querySelector(".navigation__button");

  var openMenu = function () {
    window.overlay.show();
    nav.classList.remove("navigation--closed");
    nav.classList.add("navigation--opened");
    document.addEventListener("keydown", onEscPress);
  };

  var closeMenu = function () {
    window.overlay.hide();
    nav.classList.remove("navigation--opened");
    nav.classList.add("navigation--closed");
    document.removeEventListener("keydown", onEscPress);
  };

  var isMenuOpened = function () {
    return nav.classList.contains("navigation--opened");
  };

  var onToggleClick = function () {
    if (isMenuOpened()) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  var onEscPress = function (evt) {
    if (window.evtKeyPress.isEscPressed(evt)) {
      closeMenu();
    }
  };

  navToggler.addEventListener("click", onToggleClick);

  return {
    isOpened: isMenuOpened,
    show: openMenu,
    hide: closeMenu
  };
})();
