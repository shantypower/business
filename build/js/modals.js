"use strict";!function(){var e=document.querySelector(".user-nav__item--profile"),t=document.querySelector(".user-nav__item--feedback"),a=document.querySelector(".modal--profile"),n=document.querySelector(".modal--feedback"),o=null,s=new Tabs({wrapperClass:"modal--profile",tabContainerClass:"modal__tabs",tabClass:"modal__tab",activeTabClass:"modal__tab--active",contentClass:"form",activeContentClass:"form--active"}),d=new Tabs({wrapperClass:"modal--feedback",tabContainerClass:"modal__tabs",tabClass:"modal__tab",activeTabClass:"modal__tab--active",contentClass:"form",activeContentClass:"form--active"});s.addListener(),d.addListener();var l=function(e){window.menuButton.isOpened()&&window.menuButton.hide(),window.overlay.show(),e.classList.add("modal--opened"),e.querySelector(".modal__btn").addEventListener("click",r),document.addEventListener("keydown",i),o=e},r=function(){o.classList.remove("modal--opened"),window.overlay.hide(),o.querySelector(".modal__btn").removeEventListener("click",r),document.removeEventListener("keydown",i),o=null},i=function(e){window.evtKeyPress.isEscPressed(e)&&r()};e.addEventListener("click",function(e){e.preventDefault(),l(a)}),t.addEventListener("click",function(e){e.preventDefault(),l(n)})}();