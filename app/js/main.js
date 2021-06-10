
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


