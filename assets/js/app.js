$(window).on("scroll",(function(){$(window).scrollTop()<400?$(".header").removeClass("fixed"):$(".header").addClass("fixed")})),(()=>{"use strict";(()=>{const e=document.querySelector(".burger__menu"),o=[e,document.querySelector(".nav")];e.addEventListener("click",(()=>{o.forEach((e=>{e.classList.toggle("active")}))}))})(),(()=>{const e=document.querySelectorAll(".nav__link");e.forEach((e=>{e.addEventListener("click",(()=>{o(),e.classList.add("active")}))}));const o=()=>{e.forEach((e=>{e.classList.remove("active")}))}})();var e=document.getElementById("scene");new Parallax(e);const o=new Swiper(".slider-main",{direction:"horizontal",loop:!0,loopedSlide:3,slidesPerView:"auto",spaceBetween:10,grabCursor:!0,allowSlideNext:!1,allowSlidePrev:!1,followFinger:!0,longSwipes:!1,speed:1e3});new Swiper(".slider-minor",{direction:"horizontal",loop:!0,loopedSlide:3,slidesPerView:"auto",spaceBetween:30,grabCursor:!0,followFinger:!0,longSwipes:!1,speed:1e3,controller:{control:o}})})();