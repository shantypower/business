'use strict';
// * Модуль управлeния меню

window.menuButton = (function () {

  var nav = document.querySelector('.navigation');
  var navToggler = nav.querySelector('.navigation__button');

  var openMenu = function () {
    window.overlay.show();
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  };

  var closeMenu = function () {
    window.overlay.hide();
    nav.classList.remove('navigation--opened');
    nav.classList.add('navigation--closed');
  };

  var isMenuOpened = function () {
    return nav.classList.contains('navigation--opened');
  };

  var onToggleClick = function () {
    if (isMenuOpened()) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  navToggler.addEventListener('click', onToggleClick);

  return {
    isOpened: isMenuOpened,
    show: openMenu,
    hide: closeMenu
  };
})();
