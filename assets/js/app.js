/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("(() => {\r\n   \"use strict\";\r\n   // Header\r\n   const headerSticky = () => {\r\n      const\r\n         header = document.querySelector('header'),\r\n         bodyRect = document.body.getBoundingClientRect();\r\n      if (bodyRect.top < 0) {\r\n         header.classList.add('fixed')\r\n      };\r\n      window.addEventListener('scroll', () => {\r\n         header.classList.toggle('fixed', window.scrollY > 0)\r\n      });\r\n   };\r\n   headerSticky();\r\n\r\n   // Burger\r\n   const activeMenu = () => {\r\n      const burger = document.querySelector('.burger__menu'),\r\n      nav = document.querySelector('.nav'),\r\n      navLinks = nav.querySelectorAll('.nav__link');\r\n\r\n      burger.addEventListener('click', () => nav.classList.toggle('active'));\r\n\r\n      navLinks.forEach((navLink) => {\r\n         navLink.addEventListener('click', () => {\r\n            nav.classList.remove('active')\r\n            burger.classList.remove('active')\r\n         });\r\n      });\r\n   };\r\n   activeMenu();\r\n\r\n   // Active nav links\r\n   const active = () => {\r\n      const navBtns = document.querySelectorAll('.nav__link'),\r\n      burger = document.querySelector(\".burger__menu\");\r\n\r\n      navBtns.forEach(navBtn => {\r\n         navBtn.addEventListener('click', () => {\r\n            navBtnsReset();\r\n            navBtn.classList.add('active');\r\n            burger.classList.remove('active');\r\n         });\r\n      });\r\n      const navBtnsReset = () => navBtns.forEach(navBtn => navBtn.classList.remove('active'));\r\n   };\r\n\r\n   active();\r\n\r\n   // Parallax\r\n   let scene = document.getElementById('scene');\r\n\tlet parallax = new Parallax(scene);\r\n\r\n   let sceneTwo = document.getElementById('sceneTwo');\r\n\tlet parallaxTwo = new Parallax(sceneTwo);\r\n\r\n   // Swiper-slider\r\n   const sliderMain = new Swiper('.slider-main', {\r\n      loop: true,\r\n      loopedSlide: 3,\r\n      slidesPerView: 'auto',\r\n      spaceBetween: 10,\r\n      allowSlideNext: false,\r\n      allowSlidePrev: false,\r\n   });\r\n\r\n   const sliderMinor = new Swiper('.slider-minor', {\r\n      loop: true,\r\n      loopedSlide: 3,\r\n      slidesPerView: 'auto',\r\n      spaceBetween: 30,\r\n      grabCursor: true,\r\n      simulateTouch: true,\r\n      controller: {\r\n         control: sliderMain,\r\n      },\r\n      navigation: {\r\n         nextEl: \".swiper-button-next\",\r\n         prevEl: \".swiper-button-prev\"\r\n      },\r\n      breakpoints: {\r\n         320: {\r\n            slidesPerView: 1\r\n         },\r\n         375: {\r\n            slidesPerView: 1\r\n         },\r\n         480: {\r\n            slidesPerView: 1\r\n         },\r\n         575: {\r\n            slidesPerView: 2\r\n         },\r\n         768: {\r\n            slidesPerView: 3\r\n         }\r\n      }\r\n   });\r\n})();\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;