
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
  autoHeight: true,

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
  autoHeight: true,

  navigation: {
    nextEl: '.photo-slider_button-next',
    prevEl: '.photo-slider_button-prev',
  }
});


//Modal
let openModalTraning = document.querySelector('.header-nav_btn');

let openModalQuestion = document.querySelector('.question-btn');

let introBtn = document.querySelector('.intro_btn');

let modalTraining = document.querySelector('#modal_one-training');

let modalQuestion = document.querySelector('#modal_question');

let modalBtns = document.querySelectorAll('.modal_close');
let modTrein = modalBtns[0];
let modQest = modalBtns[1];

let modalCloseShippeds = document.querySelectorAll('.modal_wrapper-shipped');
let modTreinShipped = modalCloseShippeds[0];
let modQestShipped = modalCloseShippeds[1];


openModalTraning.addEventListener('click', (event) => {
  event.preventDefault();

  modalTraining.classList.add('active');
  document.body.style.paddingRight = `${getScrollbarWidth()}px`;
  document.body.style.overflow = 'hidden';

});

openModalQuestion.addEventListener('click', (event) => {
  event.preventDefault();

  modalQuestion.classList.add('active');
  document.body.style.paddingRight = `${getScrollbarWidth()}px`;
  document.body.style.overflow = 'hidden';

});

introBtn.addEventListener('click', (event) => {
  event.preventDefault();

  modalTraining.classList.add('active');
  document.body.style.paddingRight = `${getScrollbarWidth()}px`;
  document.body.style.overflow = 'hidden';

});

modTrein.addEventListener('click', (event) => {
  event.preventDefault();

  modalTraining.classList.remove('active');
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
});
modTreinShipped.addEventListener('click', (event) => {
  event.preventDefault();

  modalTraining.classList.remove('active');
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
});
modQest.addEventListener('click', (event) => {
  event.preventDefault();

  modalQuestion.classList.remove('active');
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
});
modQestShipped.addEventListener('click', (event) => {
  event.preventDefault();

  modalQuestion.classList.remove('active');
  document.body.style.paddingRight = '';
  document.body.style.overflow = 'visible';
});

const getScrollbarWidth = () => {
  const item = document.createElement('div');

  item.style.position = 'absolute';
  item.style.top = '-9999px';
  item.style.width = '50px';
  item.style.height = '50px';
  item.style.overflow = 'scroll';
  item.style.visibility = 'hidden';

  document.body.appendChild(item);
  const scrollBarWidth = item.offsetWidth - item.clientWidth;
  document.body.removeChild(item);

  return scrollBarWidth;
};

// changing modal 
let btnsModalForm = document.querySelectorAll('.modal_form-submit');
let btnModTrein = btnsModalForm[0];
let btnModQest = btnsModalForm[1];
console.log(btnModQest);

let modalWrapper = document.querySelector('.modal_wrapper');
let modalWrapperShipped = document.querySelector('.modal_wrapper-shipped');

btnModTrein.addEventListener('click', (event) => {
  event.preventDefault();

  modalWrapper.classList.add('modal_wrapper__close');
  modalWrapperShipped.classList.add('modal_wrapper-shipped__active');
});

btnModQest.addEventListener('click', (event) => {
  event.preventDefault();

  modalQuestion.classList.toggle('modal_wrapper__close');
  modalWrapperShipped.classList.add('modal_wrapper-shipped__active');
});

// open top menu

let openBtn = document.querySelector('.top-block_open');
let itemTop = document.querySelector('.burger-item--top');
let itemMiddle = document.querySelector('.burger-item--middle');
let itemBottom = document.querySelector('.burger-item--bottom');
let topBlockWrapper = document.querySelector('.top-block_wrapper');



openBtn.addEventListener('click', addActive);

function addActive() {

  itemTop.classList.toggle('top-active');
  itemMiddle.classList.toggle('middle-active');
  itemBottom.classList.toggle('bottom-active');
  topBlockWrapper.classList.toggle('actuve-menu');



}




