"use strict";window.dropdown=function(){var a=document.querySelector(".navigation").querySelector(".main-nav--active"),e=function(i){var n=a.querySelectorAll(".main-nav__item-link--dropdown");[].forEach.call(n,function(n){n!==i&&n.classList.remove("main-nav__item-link--dropdown")}),i.classList.contains("main-nav__item-link--dropdown")?i.classList.remove("main-nav__item-link--dropdown"):i.classList.add("main-nav__item-link--dropdown")};return{dropdownItemHandler:function(n){for(var i=n.target;i!==a;){if(i.classList.contains("main-nav__item-link")){n.preventDefault(),e(i);break}i=i.parentNode}},dropdownItem:e}}();