import Swiper, { Navigation, Pagination } from 'swiper';



const swiper = new Swiper('.customers-slider', {
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
    breakpoints: {
        // when window width is <= 320px
        576: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is <= 480px
        
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });