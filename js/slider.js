"use strict";!function(){var e=document.querySelector(".slider"),t=e.querySelectorAll(".slider__item"),r=[].indexOf.call(t,e.querySelector(".slider__item--active")),c=null,l=e.querySelector(".slider__indicators"),i=e.querySelector(".slider__btn--prev"),n=e.querySelector(".slider__btn--next"),s="prev",d="next",a=function(){t[r].classList.add("slider__item--active"),c[r].classList.add("slider__indicator--active")},o=function(){t[r].classList.remove("slider__item--active"),c[r].classList.remove("slider__indicator--active")},_=function(e){switch(o(),e){case s:--r<0&&(r=t.length-1);break;case d:++r>t.length-1&&(r=0)}a()};!function(){for(var e=null,i=0;i<t.length;i++)(e=document.createElement("li")).classList.add("slider__indicator"),l.appendChild(e);(c=l.querySelectorAll(".slider__indicator"))[r].classList.add("slider__indicator--active")}(),l.addEventListener("click",function(e){for(var i=e.target;i!==l;){if(i.classList.contains("slider__indicator")){o(),r=[].indexOf.call(c,i),a();break}i=i.parentNode}}),i.addEventListener("click",function(){_(s)}),n.addEventListener("click",function(){_(d)})}();