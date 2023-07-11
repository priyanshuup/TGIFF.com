// Navbar js 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


// Swiper Js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 25,
  centeredSlides: false,
  fade: 'true',
  loop: true,
  grabCursor: 'true',
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


breakpoints:{
  0: {
      slidesPerView:1,
  },
  767: {
      slidesPerView:2,
  },
  950: {
      slidesPerView:3,
  },
  1400: {
    slidesPerView:4,
  }
  },
});

// Submit option menu 

const filmsubmissionbtn = document.querySelector("#filmsubmission button");
const submitopt = document.querySelector("#main .submitopt");
const closesubmitopt = document.querySelector("#main .ri-close-fill");


  filmsubmissionbtn.addEventListener("click", () => {
    submitopt.classList.toggle("active");
  });
  closesubmitopt.addEventListener("click", () => {
    submitopt.classList.remove("active");
  });
  
