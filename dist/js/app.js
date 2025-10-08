/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});



/*---------------------------------------------------------------------------
Phone mask
---------------------------------------------------------------------------*/
window.addEventListener("DOMContentLoaded", function () {
   [].forEach.call(document.querySelectorAll('input.tel-mask'), function (input) {
      var keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
               return i < val.length ? val.charAt(i++) : a
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
         }
         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
               return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
         }
         if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
         }
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
   });
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*---------------------------------------------------------------------------
Fix header
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const header = document.querySelector("header");

   if (!header) return;

   window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
         header.classList.add("fixed");
      } else {
         header.classList.remove("fixed");
      }
   });
});


/*---------------------------------------------------------------------------
Hero slider
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const heroSlider = document.querySelector(".hero__slider");

   if (heroSlider && typeof Swiper !== "undefined") {
      const swiper = new Swiper(heroSlider, {
         slidesPerView: 1,
         loop: true,
         effect: 'fade',
         fadeEffect: {
            crossFade: false,
         },
         speed: 500,
         autoplay: {
            delay: 2500,
            disableOnInteraction: false,
         },
         on: {
            init(swiper) {
               updateFraction(swiper);
               startTimer(swiper);
            },
            slideChange(swiper) {
               updateFraction(swiper);
               startTimer(swiper);
            },
         },
      });

      function updateFraction(swiper) {
         const total = swiper.el.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length;
         const current = (swiper.realIndex % total) + 1;
         const counters = heroSlider.querySelectorAll(".hero__slide-counter");
         counters.forEach(counter => {
            counter.textContent = `${current} / ${total}`;
         });
      }

      function startTimer(swiper) {
         const allCircles = heroSlider.querySelectorAll(".progress");
         allCircles.forEach(circle => {
            circle.style.animation = "none";
         });

         const activeSlide = swiper.slides[swiper.activeIndex];
         const activeCircle = activeSlide.querySelector(".progress");

         if (activeCircle) {
            void activeCircle.offsetWidth;
            activeCircle.style.animation = "fill 3s linear forwards";
         }
      }
   }
});


/*---------------------------------------------------------------------------
Infocard slider
---------------------------------------------------------------------------*/
const infocardSlider = document.querySelector(".hero__infocard-slider");

if (infocardSlider) {
   const infocardSwiper = new Swiper(infocardSlider, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 500,
      effect: 'fade',
      fadeEffect: {
         crossFade: false,
      },
      autoplay: {
         delay: 2500,
         disableOnInteraction: false,
      },
   });

   const advantages = document.querySelectorAll(".hero__advantage");

   function updateActiveAdvantage(index) {
      advantages.forEach((item, i) => {
         if (i <= index) {
            item.classList.add("active");
         } else {
            item.classList.remove("active");
         }
      });
   }

   updateActiveAdvantage(infocardSwiper.realIndex);

   infocardSwiper.on("slideChange", () => {
      updateActiveAdvantage(infocardSwiper.realIndex);
   });

   advantages.forEach((item, i) => {
      item.addEventListener("click", () => {
         infocardSwiper.slideToLoop(i);
      });
   });
}

/*---------------------------------------------------------------------------
Info tabs
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const main = document.querySelector(".information__main");
   if (!main) return;

   const items = main.querySelectorAll(".information__item");
   const contents = main.querySelector(".information__contents");
   if (!items.length || !contents) return;

   const itemTexts = Array.from(items).map(item => item.querySelector(".information__item-text"));
   let currentMode = null;

   // ======== ПК-режим (ТАБЫ) ========
   function activateTabs() {
      if (currentMode === "tabs") return;
      currentMode = "tabs";

      contents.innerHTML = "";
      itemTexts.forEach(text => {
         if (text) contents.appendChild(text);
         text.style.maxHeight = "";
         text.style.transition = "";
      });

      items.forEach((item, i) => {
         item.classList.remove("active");
         if (contents.children[i]) contents.children[i].classList.remove("active");
      });

      if (items[0] && contents.children[0]) {
         items[0].classList.add("active");
         contents.children[0].classList.add("active");
      }

      items.forEach((item, index) => {
         const btn = item.querySelector(".information__item-btn");
         if (!btn) return;

         btn.onclick = () => {
            items.forEach(i => i.classList.remove("active"));
            Array.from(contents.children).forEach(c => c.classList.remove("active"));

            item.classList.add("active");
            if (contents.children[index]) {
               contents.children[index].classList.add("active");
            }
         };
      });
   }

   // ======== МОБИЛЬНЫЙ режим (АККОРДЕОН) ========
   function activateAccordion() {
      if (currentMode === "accordion") return;
      currentMode = "accordion";

      itemTexts.forEach((text, i) => {
         if (text && !items[i].contains(text)) {
            items[i].appendChild(text);
         }

         text.style.overflow = "hidden";
         text.style.transition = "max-height 0.3s ease";
         text.style.maxHeight = "0px";
      });

      items.forEach(item => item.classList.remove("active"));

      items.forEach(item => {
         const btn = item.querySelector(".information__item-btn");
         const text = item.querySelector(".information__item-text");
         if (!btn || !text) return;

         btn.onclick = () => {
            const isActive = item.classList.contains("active");

            items.forEach(i => i.classList.remove("active"));
            itemTexts.forEach(t => {
               t.style.maxHeight = "0px";
            });

            if (!isActive) {
               item.classList.add("active");
               text.style.maxHeight = text.scrollHeight + "px";
            }
         };
      });
   }

   // ======== Переключатель режимов ========
   function handleResize() {
      if (window.innerWidth >= 980) {
         activateTabs();
      } else {
         activateAccordion();
      }
   }

   window.addEventListener("resize", handleResize);
   handleResize();
});


/*---------------------------------------------------------------------------
Move info
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const infocard = document.querySelector(".hero__infocard");
   const mobContainer = document.querySelector(".hero__infocard-mob");
   const footerContainer = document.querySelector(".hero__footer");

   if (!infocard || !mobContainer || !footerContainer) return;

   const moveInfocard = () => {
      if (window.innerWidth <= 980) {
         if (!mobContainer.contains(infocard)) {
            mobContainer.appendChild(infocard);
         }
      } else {
         if (!footerContainer.contains(infocard)) {
            footerContainer.appendChild(infocard);
         }
      }
   };

   moveInfocard();
   window.addEventListener("resize", moveInfocard);
});


/*---------------------------------------------------------------------------
Show categories
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const catalogWrapper = document.querySelector(".catalog__wrapper");
   const catalogSection = document.querySelector(".catalog__categories");
   const btnOpen = document.querySelector(".catalog__more-open");
   const btnClose = document.querySelector(".catalog__more-close");

   if (!catalogWrapper || !btnOpen || !btnClose) return;

   btnClose.style.display = "none";

   const openCatalog = () => {
      catalogWrapper.classList.add("active");
      btnOpen.style.display = "none";
      btnClose.style.display = "inline-flex";
   };

   const closeCatalog = () => {
      catalogWrapper.classList.remove("active");
      btnClose.style.display = "none";
      btnOpen.style.display = "inline-flex";

      // Скроллим к низу блока
      const bottomPosition = catalogSection.getBoundingClientRect().bottom + window.pageYOffset - window.innerHeight + 40;

      window.scrollTo({
         top: bottomPosition,
         behavior: "smooth"
      });
   };


   btnOpen.addEventListener("click", openCatalog);
   btnClose.addEventListener("click", closeCatalog);

   const highlightCategory = (element) => {
      if (!element) return;
      element.classList.add("highlight");
      setTimeout(() => {
         element.classList.remove("highlight");
      }, 1500);
   };

   const hash = window.location.hash;
   if (hash && document.querySelector(hash)) {
      openCatalog();
      setTimeout(() => {
         const target = document.querySelector(hash);
         if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            highlightCategory(target);
         }
      }, 300);
   }

   document.querySelectorAll('a[href^="#category-"]').forEach(link => {
      link.addEventListener("click", (e) => {
         const targetId = link.getAttribute("href");
         const target = document.querySelector(targetId);
         if (!target) return;

         if (!catalogWrapper.classList.contains("active")) {
            openCatalog();
            setTimeout(() => {
               target.scrollIntoView({ behavior: "smooth", block: "start" });
               highlightCategory(target);
            }, 300);
         } else {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            highlightCategory(target);
         }
      });
   });
});


/*---------------------------------------------------------------------------
Show tags
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const updateTags = () => {
      const isMobile = window.innerWidth < 767;
      const categories = document.querySelectorAll(".catalog__category");

      categories.forEach(category => {
         const wrapper = category.querySelector(".catalog__category-tags");
         if (!wrapper) return;

         const tags = wrapper.querySelectorAll(".tag:not(.tag-toggle)");
         const toggle = wrapper.querySelector(".tag-toggle");
         const quantity = toggle ? toggle.querySelector(".tag-toggle__quantity") : null;

         tags.forEach(tag => tag.style.display = "");
         if (toggle) toggle.style.display = "none";

         if (isMobile && tags.length > 3) {
            tags.forEach((tag, index) => {
               if (index >= 3) tag.style.display = "none";
            });

            if (toggle && quantity) {
               toggle.style.display = "inline-flex";
               quantity.textContent = `+${tags.length - 3}`;
               toggle.dataset.state = "closed";
               toggle.firstChild.textContent = "Смотреть все";
            }

            if (toggle && !toggle.dataset.bound) {
               toggle.addEventListener("click", () => {
                  const state = toggle.dataset.state;

                  if (state === "closed") {
                     tags.forEach(tag => tag.style.display = "inline-block");
                     toggle.firstChild.textContent = "Свернуть ";
                     toggle.dataset.state = "open";
                  } else {
                     tags.forEach((tag, index) => {
                        if (index >= 3) tag.style.display = "none";
                     });
                     toggle.firstChild.textContent = "Смотреть все ";
                     toggle.dataset.state = "closed";
                  }
               });
               toggle.dataset.bound = "true";
            }
         }
      });
   };

   updateTags();
   window.addEventListener("resize", updateTags);
});

/*---------------------------------------------------------------------------
Play video
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const player = document.querySelector(".about__player");
   if (!player) return;

   const video = player.querySelector("video");
   const playButton = player.querySelector(".about__player-play");

   if (!video || !playButton) return;

   playButton.addEventListener("click", () => {
      video.setAttribute("controls", "controls");
      video.play();
      playButton.style.display = "none";
   });

   video.addEventListener("ended", () => {
      video.removeAttribute("controls");
      playButton.style.display = "";
      video.currentTime = 0;
   });
});

/*---------------------------------------------------------------------------
Partners slider
---------------------------------------------------------------------------*/
const partnersSlider = document.querySelector(".partners__slider");

if (partnersSlider) {
   const partnersSwiper = new Swiper(partnersSlider, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
         nextEl: '.partners__slider-next',
         prevEl: '.partners__slider-prev',
      },
   });
}


/*---------------------------------------------------------------------------
Map
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const mapObject = document.getElementById("russiaMap");
   if (!mapObject) return;

   mapObject.addEventListener("load", () => {
      const svgDoc = mapObject.contentDocument;
      if (!svgDoc) return;

      const redCircles = Array.from(svgDoc.querySelectorAll(".red-circle"));
      if (!redCircles.length) return;

      // максимальное количество одновременных вспышек
      const MAX_ACTIVE = 15;

      function flashRandomCircles() {
         // выбираем случайное количество активных (например, 10–15)
         const count = Math.floor(10 + Math.random() * 6);

         // выбираем случайные path
         const randomCircles = redCircles
            .sort(() => 0.5 - Math.random())
            .slice(0, count);

         // запускаем анимацию для выбранных
         randomCircles.forEach(el => {
            if (el.classList.contains("flash")) return; // не дублируем
            el.classList.add("flash");
            setTimeout(() => el.classList.remove("flash"), 5000);
         });

         // запускаем следующую волну через случайный интервал
         const delay = 400 + Math.random() * 800;
         setTimeout(flashRandomCircles, delay);
      }

      flashRandomCircles();
   });
});




/*---------------------------------------------------------------------------
Portfolio sliders
---------------------------------------------------------------------------*/
// Главный слайдер
const portMainSlider = document.querySelector(".portfolio__main-slider");

if (portMainSlider) {
   // Функция инициализации
   const initMainSlider = () => {
      // Определяем, какие кнопки использовать
      const isMobile = window.innerWidth < 980;
      const nextBtn = isMobile ? ".portfolio__main-slider-next" : ".portfolio__next";
      const prevBtn = isMobile ? ".portfolio__main-slider-prev" : ".portfolio__prev";

      // Проверяем, существует ли уже Swiper (чтобы не дублировать)
      if (portMainSlider.swiper) {
         portMainSlider.swiper.destroy(true, true);
      }

      // Создаем Swiper
      new Swiper(portMainSlider, {
         loop: false,
         slidesPerView: 1,
         spaceBetween: 10,
         simulateTouch: false,
         navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
         },
      });
   };

   initMainSlider();
   window.addEventListener("resize", () => {
      initMainSlider();
   });
}

// Внутренние слайдеры 
const portfolioSlides = document.querySelectorAll(".portfolio__card");

portfolioSlides.forEach(slide => {
   const thumbs = slide.querySelector(".portfolio__slider");
   const big = slide.querySelector(".portfolio__slider-big");

   if (thumbs && big) {
      const thumbsSwiper = new Swiper(thumbs, {
         spaceBetween: 10,
         slidesPerView: 6,
         freeMode: true,
         watchSlidesProgress: true,
      });

      const bigSwiper = new Swiper(big, {
         spaceBetween: 10,
         slidesPerView: 1,
         navigation: {
            nextEl: slide.querySelector(".portfolio__slide-next"),
            prevEl: slide.querySelector(".portfolio__slide-prev"),
         },
         thumbs: {
            swiper: thumbsSwiper,
         },
      });
   }
});


/*---------------------------------------------------------------------------
Certificates slider
---------------------------------------------------------------------------*/
const certificatesSlider = document.querySelector(".certificates__slider");

if (certificatesSlider) {
   const certificatesSwiper = new Swiper(certificatesSlider, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
         nextEl: '.certificates__slider-next',
         prevEl: '.certificates__slider-prev',
      },
   });
}


/*---------------------------------------------------------------------------
Popups
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButtons = document.querySelectorAll('.open-popup');

   if (openButtons && openButtons.length > 0) {
      openButtons.forEach(button => {
         if (!button) return;

         button.addEventListener('click', function (e) {
            if (this.tagName.toLowerCase() === 'a') {
               e.preventDefault();
            }

            const popupId = this.dataset.popup;
            if (!popupId) return;

            const popup = document.getElementById(popupId);
            if (popup) {
               popup.classList.add('show');
               document.body.style.overflow = 'hidden';
            }
         });
      });
   }

   document.addEventListener('click', function (e) {
      const openPopup = document.querySelector('.popup.show');
      if (!openPopup) return;

      const isCloseBtn = e.target.closest('.popup__close');
      const isInsideBody = e.target.closest('.popup__body');
      const isPopupArea = e.target.closest('.popup');

      if (isCloseBtn || (!isInsideBody && isPopupArea)) {
         openPopup.classList.remove('show');
         document.body.style.overflow = '';
      }
   });
});



/*---------------------------------------------------------------------------
Cookies
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const notice = document.getElementById("cookieNotice");
   const acceptBtn = document.getElementById("cookieAcceptBtn");

   if (!localStorage.getItem("cookieAccepted")) {
      notice.classList.add("active");
   }

   acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieAccepted", "true");
      notice.classList.remove("active");
   });
});

/*---------------------------------------------------------------------------
Scroll top
---------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const scrollBtn = document.querySelector('.scroll-top');
   if (!scrollBtn) return;

   scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   });

   window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
         scrollBtn.classList.add('show');
      } else {
         scrollBtn.classList.remove('show');
      }
   });
});
})();

/******/ })()
;