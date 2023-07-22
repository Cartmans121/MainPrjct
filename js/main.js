// Бургер меню
const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu--open');
})

// Slider 
const swiperOne = new Swiper('.feedback__slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });

// Slider certification

const swiperTwo = new Swiper('.certificates__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50, 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        360: {
            slidesPerView: 2,
            spaceBetween: 20,   
        },
    }
  });

