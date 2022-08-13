// tulisan bergerak
var typed = new Typed('.type-first', {
  strings: [
    "Hi Guys",
    "Akhtar Faizi Putra",
    "Full Stack Web Developer",
    "Part of SMKN 7"
  ],
  smartBackspace: true,
  typeSpeed: 100,
  delaySpeed: 90,
  loop: true
});

var typed = new Typed('.type-second', {
  strings: [
    "Welcome",
    "Independent",
    "Professional and Trusted",
    "Based on East Jakarta, Indonesian"
  ],
  typeSpeed: 100,
  delaySpeed: 90,
  loop: true
});

// Menu Toggle
(function () {
  "use strict";
  var mobBtn, topMenu;

  function init() {
    mobBtn = document.getElementById("mobile-btn");
    topMenu = document.getElementById("top-menu");
    mobBtn.addEventListener("click", mobileMenu, false);
  }

  function mobileMenu() {
    if (topMenu.classList.contains("mobile-open")) {
      topMenu.classList.remove("mobile-open");
    } else {
      topMenu.classList.add("mobile-open");
    }
    if (mobBtn.classList.contains("hamburger-cross")) {
      mobBtn.classList.remove("hamburger-cross");
    } else {
      mobBtn.classList.add("hamburger-cross");
    }
  }

  document.addEventListener("DOMContentLoaded", init);

})();

// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top
  }, 1250, 'easeInOutExpo');

  e.preventDefault();

});

// memunculkan icon scrollTop
$(window).scroll(function () {
  var totalHeight = $(window).scrollTop();
  if (totalHeight > 300) {
    $(".scrollTop").fadeIn();
  } else {
    $(".scrollTop").fadeOut();
  }
});

// proses scroll
$('a.scrollTop').on('click', function (event) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#particles-js").offset().top
  }, 1250, 'easeInOutExpo');
});

// swipper
var swiper = new Swiper('.portfolios', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  zoom: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

var num = 15;
var modalBtn = document.querySelector('.open-modal-1');
var closeBtn = document.querySelector('.first');

var modalContainer = document.querySelector('.first');
var holdModals = document.createDocumentFragment();

for (var i = 0; i < num; i++) {
  var div = document.createElement('div');
  div.classList.add('modal-drop');
  div.style.top = Math.floor((Math.random() * 100)) + 'vh';
  div.style.left = Math.floor((Math.random() * 100)) + 'vw';
  div.style.transitionDelay = Math.random() + 's';
  holdModals.appendChild(div);
}
console.log('ok');
modalContainer.appendChild(holdModals);
modalBtn.addEventListener('click', function () {
  modalContainer.style.display = 'block';
  window.setTimeout(function () {
    modalContainer.classList.add('active');
  }, 0.1)
});


closeBtn.addEventListener('click', function () {
  modalContainer.classList.remove('active');
  window.setTimeout(function () {
    modalContainer.style.display = 'none';
  }, 3000);
});

var num = 15;
var modalBtn = document.querySelector('.open-modal-2');
var closeBtn = document.querySelector('.second');

var modalContainer = document.querySelector('.second');
var holdModals = document.createDocumentFragment();

for (var i = 0; i < num; i++) {
  var div = document.createElement('div');
  div.classList.add('modal-drop');
  div.style.top = Math.floor((Math.random() * 100)) + 'vh';
  div.style.left = Math.floor((Math.random() * 100)) + 'vw';
  div.style.transitionDelay = Math.random() + 's';
  holdModals.appendChild(div);
}
console.log('ok');
modalContainer.appendChild(holdModals);
modalBtn.addEventListener('click', function () {
  modalContainer.style.display = 'block';
  window.setTimeout(function () {
    modalContainer.classList.add('active');
  }, 0.1)
});


closeBtn.addEventListener('click', function () {
  modalContainer.classList.remove('active');
  window.setTimeout(function () {
    modalContainer.style.display = 'none';
  }, 3000);
});

var num = 15;
var modalBtn = document.querySelector('.open-modal-3');
var closeBtn = document.querySelector('.third');

var modalContainer = document.querySelector('.third');
var holdModals = document.createDocumentFragment();

for (var i = 0; i < num; i++) {
  var div = document.createElement('div');
  div.classList.add('modal-drop');
  div.style.top = Math.floor((Math.random() * 100)) + 'vh';
  div.style.left = Math.floor((Math.random() * 100)) + 'vw';
  div.style.transitionDelay = Math.random() + 's';
  holdModals.appendChild(div);
}
console.log('ok');
modalContainer.appendChild(holdModals);
modalBtn.addEventListener('click', function () {
  modalContainer.style.display = 'block';
  window.setTimeout(function () {
    modalContainer.classList.add('active');
  }, 0.1)
});


closeBtn.addEventListener('click', function () {
  modalContainer.classList.remove('active');
  window.setTimeout(function () {
    modalContainer.style.display = 'none';
  }, 3000);
});