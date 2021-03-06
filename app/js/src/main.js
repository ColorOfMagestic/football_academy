const swiper = new Swiper(".coach-slider", {
  observeParents: !0,
  observer: !0,
  simulateTouch: !1,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
new Swiper(".feedback-slider", {
  loop: !0,
  autoHeight: !0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
}),
  new Swiper(".cafe-slider", {
    loop: !0,
    spaceBetween: 100,
    navigation: {
      nextEl: ".cafe-slider_button-next",
      prevEl: ".cafe-slider_button-prev",
    },
  }),
  new Swiper(".photo-slider", {
    loop: !0,
    autoHeight: !0,
    navigation: {
      nextEl: ".photo-slider_button-next",
      prevEl: ".photo-slider_button-prev",
    },
  });
let openModalTraning = document.querySelector(".header-nav_btn"),
  openModalQuestion = document.querySelector(".question-btn"),
  introBtn = document.querySelector(".intro_btn"),
  modalTraining = document.querySelector("#modal_one-training"),
  modalQuestion = document.querySelector("#modal_question"),
  modalBtns = document.querySelectorAll(".modal_close"),
  modTrein = modalBtns[0],
  modQest = modalBtns[1],
  modalCloseShippeds = document.querySelectorAll(".modal_wrapper-shipped"),
  modTreinShipped = modalCloseShippeds[0],
  modQestShipped = modalCloseShippeds[1];
openModalTraning.addEventListener("click", (e) => {
  e.preventDefault(),
    modalTraining.classList.add("active"),
    (document.body.style.paddingRight = getScrollbarWidth() + "px"),
    (document.body.style.overflow = "hidden");
}),
  openModalQuestion.addEventListener("click", (e) => {
    e.preventDefault(),
      modalQuestion.classList.add("active"),
      (document.body.style.paddingRight = getScrollbarWidth() + "px"),
      (document.body.style.overflow = "hidden");
  }),
  introBtn.addEventListener("click", (e) => {
    e.preventDefault(),
      modalTraining.classList.add("active"),
      (document.body.style.paddingRight = getScrollbarWidth() + "px"),
      (document.body.style.overflow = "hidden");
  }),
  modTrein.addEventListener("click", (e) => {
    e.preventDefault(),
      modalTraining.classList.remove("active"),
      (document.body.style.paddingRight = ""),
      (document.body.style.overflow = "visible");
  }),
  modTreinShipped.addEventListener("click", (e) => {
    e.preventDefault(),
      modalTraining.classList.remove("active"),
      (document.body.style.paddingRight = ""),
      (document.body.style.overflow = "visible");
  }),
  modQest.addEventListener("click", (e) => {
    e.preventDefault(),
      modalQuestion.classList.remove("active"),
      (document.body.style.paddingRight = ""),
      (document.body.style.overflow = "visible");
  }),
  modQestShipped.addEventListener("click", (e) => {
    e.preventDefault(),
      modalQuestion.classList.remove("active"),
      (document.body.style.paddingRight = ""),
      (document.body.style.overflow = "visible");
  });
const getScrollbarWidth = () => {
  const e = document.createElement("div");
  (e.style.position = "absolute"),
    (e.style.top = "-9999px"),
    (e.style.width = "50px"),
    (e.style.height = "50px"),
    (e.style.overflow = "scroll"),
    (e.style.visibility = "hidden"),
    document.body.appendChild(e);
  const t = e.offsetWidth - e.clientWidth;
  return document.body.removeChild(e), t;
};
let btnsModalForm = document.querySelectorAll(".modal_form-submit"),
  btnModTrein = btnsModalForm[0],
  btnModQest = btnsModalForm[1];
console.log(btnModQest);
let modalWrapper = document.querySelector(".modal_wrapper"),
  modalWrapperShipped = document.querySelector(".modal_wrapper-shipped");
btnModTrein.addEventListener("click", (e) => {
  e.preventDefault(),
    modalWrapper.classList.add("modal_wrapper__close"),
    modalWrapperShipped.classList.add("modal_wrapper-shipped__active");
}),
  btnModQest.addEventListener("click", (e) => {
    e.preventDefault(),
      modalQuestion.classList.toggle("modal_wrapper__close"),
      modalWrapperShipped.classList.add("modal_wrapper-shipped__active");
  });
let openBtn = document.querySelector(".top-block_open"),
  itemTop = document.querySelector(".burger-item--top"),
  itemMiddle = document.querySelector(".burger-item--middle"),
  itemBottom = document.querySelector(".burger-item--bottom"),
  topBlockWrapper = document.querySelector(".top-block_wrapper");
function addActive() {
  itemTop.classList.toggle("top-active"),
    itemMiddle.classList.toggle("middle-active"),
    itemBottom.classList.toggle("bottom-active"),
    topBlockWrapper.classList.toggle("actuve-menu");
}
openBtn.addEventListener("click", addActive);
