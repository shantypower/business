"use strict";
// * Модуль управляет модальными окнами профиля и обратной связи

(function () {

  var btnProfile = document.querySelector(".user-nav__item--profile");
  var btnFeedback = document.querySelector(".user-nav__item--feedback");

  var modalProfile = document.querySelector(".modal--profile");
  var modalFeedback = document.querySelector(".modal--feedback");

  var overlay = document.querySelector(".overlay");

  var activeModal = null;

  var profileTabs = new Tabs({
    wrapperClass: "modal--profile",
    tabContainerClass: "modal__tabs",
    tabClass: "modal__tab",
    activeTabClass: "modal__tab--active",
    contentClass: "form",
    activeContentClass: "form--active"
  });

  var feedbackTabs = new Tabs({
    wrapperClass: "modal--feedback",
    tabContainerClass: "modal__tabs",
    tabClass: "modal__tab",
    activeTabClass: "modal__tab--active",
    contentClass: "form",
    activeContentClass: "form--active"
  });

  profileTabs.addListener();
  feedbackTabs.addListener();


  var showModal = function (modal) {
    if (window.menuButton.isOpened()) {
      window.menuButton.hide();
    }
    window.overlay.show();
    modal.classList.add("modal--opened");
    modal.querySelector(".modal__btn").addEventListener("click", closeModal);
    document.addEventListener("keydown", onEscPress);
    activeModal = modal;
  };

  var closeModal = function () {
    activeModal.classList.remove("modal--opened");
    window.overlay.hide();
    activeModal.querySelector(".modal__btn").removeEventListener("click", closeModal);
    document.removeEventListener("keydown", onEscPress);
    activeModal = null;
  };


  var showProfile = function (evt) {
    evt.preventDefault();
    showModal(modalProfile);
  };

  var showFeedback = function (evt) {
    evt.preventDefault();
    showModal(modalFeedback);
  };

  var onEscPress = function (evt) {
    if (window.evtKeyPress.isEscPressed(evt)) {
      closeModal();
    }
  };

  btnProfile.addEventListener("click", showProfile);
  btnFeedback.addEventListener("click", showFeedback);
  overlay.addEventListener("click", closeModal);

})();
