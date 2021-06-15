
//Slider coach
const swiper = new Swiper('.coach-slider', {
  observeParents: true,
  observer: true,
  simulateTouch: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//Slider feedback
new Swiper('.feedback-slider', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
//Slider cafe
new Swiper('.cafe-slider', {
  loop: true,
  spaceBetween: 100,
  navigation: {
    nextEl: '.cafe-slider_button-next',
    prevEl: '.cafe-slider_button-prev',
  }
});
//Slider photo
new Swiper('.photo-slider', {
  observeParents: true,

  navigation: {
    nextEl: '.photo-slider_button-next',
    prevEl: '.photo-slider_button-prev',
  }
});


