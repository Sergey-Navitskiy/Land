'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
 
const btnScroll = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScroll.addEventListener('click', function(){
  // window.scrollTo({
  //   left: section1.getBoundingClientRect().left + window.pageXOffset,
  //   top: section1.getBoundingClientRect().top + window.pageYOffset,
  //   behavior: 'smooth'
  // })
  section1.scrollIntoView({behavior: 'smooth'})
})


// Убрать обработчик события

// const h1 = document.querySelector('h1')
// function allerH(){
//   allert('hello mff!!!')
// }

// setTimeout(function(){
//   h1.removeEventListener('mouseenter', allertH())
// }, 4000)

// randomizer
// function randomInteger(min, max){
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// function randomColour() {
//   return `rgb(${randomInteger(0, 255)},${randomInteger(0, 255)},${randomInteger(0, 255)})`
// }

// document.querySelectorAll('.nav__link').forEach(function(ell){
//   ell.addEventListener('click', function(e){
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })
const nav = document.querySelector(".nav__links");

nav.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target); // Вернет дочерний элемент на который нажали
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});


const tab = document.querySelectorAll('.operations__tab')
const tabconteiner = document.querySelector('.operations__tab-container')
const tabcont = document.querySelectorAll('.operations__content')

tabconteiner.addEventListener('click', function(e){
  e.preventDefault()
  const clicked = e.target.closest('.operations__tab')
  console.log(clicked)

  if(!clicked) return

  tab.forEach((tab) => tab.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')
  tabcont.forEach((content) => content.classList.remove('operations__content--active'))

  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
})