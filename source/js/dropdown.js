'use strict';
window.dropdown = (function () {

  var nav = document.querySelector('.navigation');
  var mainNav = nav.querySelector('.main-nav--active');

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

    while (target !== mainNav) {
      if (target.classList.contains('main-nav__item-link')) {
        evt.preventDefault();
        dropdownItem(target);
        break;
      }
      target = target.parentNode;
    }

  };

  return {
    dropdownItemHandler: dropdownItemHandler,
    dropdownItem: dropdownItem
  };

})();
