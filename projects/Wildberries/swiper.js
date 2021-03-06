import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // breakpoints: {
    //     500: {
    //       slidesPerView: 1,
    //       spaceBetween: 30
    //     },
    //     768: {
    //       slidesPerView: 2,
    //       spaceBetween: 30
    //     },
    //     992: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     }
    //   }
  });
  