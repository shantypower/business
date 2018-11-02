'use strict';
window.tabsControl = (function () {

  var nav = document.querySelector('.navigation');
  var mainNav = nav.querySelector('.main-nav--active');

  var navTabs = new Tabs({
    wrapperClass: 'navigation__menu',
    tabContainerClass: 'survice-type',
    tabClass: 'survice-type__item',
    activeTabClass: 'survice-type__item--active',
    contentClass: 'main-nav',
    activeContentClass: 'main-nav--active',
    cb: updateMainNav
  });

  var updateMainNav = function () {
    mainNav.removeEventListener('click', dropdownItemHandler);
    mainNav = nav.querySelector('.main-nav--active');
    mainNav.addEventListener('click', dropdownItemHandler);
  };


  /**
   * Функция раскрывает выбранный выпадающий список закрывает другие выпадающие списки
   * @param {HTMLElement} item - выбранный выпадающий список
   */
  var dropdownItem = function (item) {
    var openedItems = mainNav.querySelectorAll('.main-nav__item-link--dropdown');
    [].forEach.call(openedItems, function (openedItem) {
      openedItem !== item && openedItem.classList.remove('main-nav__item-link--dropdown');
    });
    if (item.classList.contains('main-nav__item-link--dropdown')) {
      item.classList.remove('main-nav__item-link--dropdown');
    } else {
      item.classList.add('main-nav__item-link--dropdown');
    }
  };

 //  * Обработчик выбора выпадающего списка

  var dropdownItemHandler = function (evt) {
    var target = evt.target;

    if (isMobileScreen()) {
      while (target !== mainNav) {
        if (target.classList.contains('main-nav__item-link')) {
          evt.preventDefault();
          dropdownItem(target);
          break;
        }
        target = target.parentNode;
      }
    }
  };

  navTabs.addListener();

})();
