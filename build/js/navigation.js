"use strict";window.navigation=function(){var n=document.querySelector(".navigation"),i=n.querySelector(".navigation__button");i.addEventListener("click",function(){n.classList.contains("navigation--opened")?(window.overlay.hide(),n.classList.remove("navigation--opened"),n.classList.add("navigation--closed")):(window.overlay.show(),n.classList.remove("navigation--closed"),n.classList.add("navigation--opened"))})}();