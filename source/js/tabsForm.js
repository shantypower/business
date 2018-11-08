"use strict";

(function () {
  var tabsForm = new Tabs({
    wrapperClass: "modal",
    tabContainerClass: "modal__tabs",
    tabClass: "modal__tab",
    activeTabClass: "modal__tab--active",
    contentClass: "form",
    activeContentClass: "form--active"
  });

  tabsForm.addListener();

})();
