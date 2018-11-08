"use strict";

(function () {

  var nav = document.querySelector(".navigation");
  var mainNav = nav.querySelector(".main-nav--active");

  var updateMainNav = function () {
    mainNav.removeEventListener("click", dropdown.dropdownItemHandler);
    mainNav = nav.querySelector(".main-nav--active");
    mainNav.addEventListener("click", dropdown.dropdownItemHandler);
  };

  var navTabs = new Tabs({
    wrapperClass: "navigation__menu",
    tabContainerClass: "survice-type",
    tabClass: "survice-type__item",
    activeTabClass: "survice-type__item--active",
    contentClass: "main-nav",
    activeContentClass: "main-nav--active",
    cb: updateMainNav
  });

  navTabs.addListener();

})();
