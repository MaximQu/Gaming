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

eval("// $('.burger').on('click', () => {\r\n//    $('.nav__list').toggleClass('active');\r\n// })\r\n\r\n$(window).on('scroll', function () {\r\n   var scroll = $(window).scrollTop();\r\n   if (scroll < 400) {\r\n     $(\".header\").removeClass(\"fixed\");\r\n   } else {\r\n     $(\".header\").addClass(\"fixed\");\r\n   }\r\n});\r\n\r\n(() => {\r\n   \"use strict\";\r\n   // Burger\r\n   const activeMenu = () => {\r\n      const burger = document.querySelector(\".burger__menu\"),\r\n      nav = [burger, document.querySelector(\".nav\")];\r\n      burger.addEventListener(\"click\", (() => {\r\n      nav.forEach((e => {\r\n         e.classList.toggle(\"active\")\r\n         }));\r\n      }));\r\n   };\r\n\r\n   activeMenu();\r\n\r\n   // active nav links\r\n   const active = () => {\r\n      const navBtns = document.querySelectorAll('.nav__link');\r\n\r\n      navBtns.forEach(navBtn => {\r\n         navBtn.addEventListener('click', () => {\r\n            navBtnsReset();\r\n            navBtn.classList.add('active');\r\n         });\r\n      });\r\n      const navBtnsReset = () => {\r\n         navBtns.forEach(navBtn => {\r\n            navBtn.classList.remove('active')\r\n         });\r\n      };\r\n   };\r\n\r\n   active();\r\n\r\n   // Parallax\r\n   var scene = document.getElementById('scene');\r\n\tvar parallax = new Parallax(scene);\r\n\r\n   // Swiper-slider\r\n   const sliderMain = new Swiper('.slider-main', {\r\n      // Optional parameters\r\n      direction: 'horizontal',\r\n      // loop: true,\r\n      // loopedSlides: 3,\r\n      slidesPerView: 1,\r\n      grabCursor: true,\r\n      followFinger: true,\r\n      longSwipes: false,\r\n      speed: 1000,\r\n      // autoplay: {\r\n      //    delay: 100,\r\n      //    disableOnInteraction: false,\r\n      //    pauseOnMouseEnter: true,\r\n      // },\r\n      // effect: 'fade'\r\n   });\r\n\r\n   const sliderMinor = new Swiper('.slider-minor', {\r\n      direction: 'horizontal',\r\n      // loop: true,\r\n      // loopedSlides: 3,\r\n      // spaceBetween: 30,\r\n      slidesPerView: 3,\r\n      grabCursor: true,\r\n      followFinger: true,\r\n      longSwipes: false,\r\n      speed: 1000,\r\n   });\r\n\r\n   sliderMain.controller.control = sliderMinor;\r\n   sliderMinor.controller.control = sliderMain;\r\n})();\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/app.js?");

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