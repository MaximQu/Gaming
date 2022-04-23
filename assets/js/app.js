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

eval("\r\n$(window).on('scroll', function () {\r\n   var scroll = $(window).scrollTop();\r\n   if (scroll < 400) {\r\n     $(\".header\").removeClass(\"fixed\");\r\n   } else {\r\n     $(\".header\").addClass(\"fixed\");\r\n   }\r\n});\r\n\r\n(() => {\r\n   \"use strict\";\r\n   // Burger\r\n   const activeMenu = () => {\r\n      const burger = document.querySelector(\".burger__menu\"),\r\n      nav = [burger, document.querySelector(\".nav\")];\r\n      burger.addEventListener(\"click\", (() => {\r\n      nav.forEach((e => {\r\n         e.classList.toggle(\"active\")\r\n         }));\r\n      }));\r\n   };\r\n\r\n   activeMenu();\r\n\r\n   // active nav links\r\n   const active = () => {\r\n      const navBtns = document.querySelectorAll('.nav__link');\r\n\r\n      navBtns.forEach(navBtn => {\r\n         navBtn.addEventListener('click', () => {\r\n            navBtnsReset();\r\n            navBtn.classList.add('active');\r\n         });\r\n      });\r\n      const navBtnsReset = () => {\r\n         navBtns.forEach(navBtn => {\r\n            navBtn.classList.remove('active')\r\n         });\r\n      };\r\n   };\r\n\r\n   active();\r\n\r\n   // Parallax\r\n   var scene = document.getElementById('scene');\r\n\tvar parallax = new Parallax(scene);\r\n\r\n   // Swiper-slider\r\n   const sliderMain = new Swiper('.slider-main', {\r\n      // Optional parameters\r\n      direction: 'horizontal',\r\n      loop: true,\r\n      loopedSlide: 3,\r\n      slidesPerView: 'auto',\r\n      spaceBetween: 10,\r\n      allowSlideNext: false,\r\n      allowSlidePrev: false,\r\n      // effect: 'fade',\r\n      // fadeEffect: {\r\n      //    crossFade: true\r\n      // }\r\n   });\r\n\r\n   const sliderMinor = new Swiper('.slider-minor', {\r\n      direction: 'horizontal',\r\n      loop: true,\r\n      loopedSlide: 3,\r\n      slidesPerView: 'auto',\r\n      spaceBetween: 30,\r\n      grabCursor: true,\r\n      controller: {\r\n         control: sliderMain,\r\n      },\r\n      breakpoints: {\r\n         320: {\r\n            // centeredSlide: true,\r\n            // centeredSlidesBounds: true\r\n         },\r\n         375: {\r\n            slidesPerView: 1\r\n         },\r\n         480: {\r\n            slidesPerView: 1\r\n         },\r\n         575: {\r\n            slidesPerView: 2\r\n         },\r\n         768: {\r\n            slidesPerView: 3\r\n         }\r\n      }\r\n   });\r\n})();\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/app.js?");

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