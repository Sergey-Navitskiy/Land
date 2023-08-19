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

// const nav = document.querySelector('.nav')
// const navLinkes = document.querySelector('.nav__links')
// const link = document.querySelector('.nav__link')

// nav.addEventListener('click', function(){
//   this.style.backgroundColor = randomColour()
// })

// navLinkes.addEventListener('click', function(){
//   this.style.backgroundColor = randomColour()
// })

// link.addEventListener('click', function(e){
//   this.style.backgroundColor = randomColour()
//   e.stopPropagation( )
// })

// document.querySelectorAll('.nav__link').forEach(function(ell){
//   ell.addEventListener('click', function(e){
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault()
  if(e.target.classList.contains('nav__link')){
    const id = e.target().getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})