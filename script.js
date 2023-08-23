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

function hover(e, opacity){
  if(e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('.nav__logo')

    siblings.forEach(function(el){
      if(el !== link){
        el.style.opacity = opacity
      }

    })
    logo.style.opacity = opacity
  }
}

nav.addEventListener('mouseover', function(e){
  hover(e, 0.5)
})

nav.addEventListener('mouseout', function(e){
  hover(e, 1)
})



//навигационное меню везде
const navContainer = document.querySelector('.nav')
const coords = section1.getBoundingClientRect()

function callBack(entries, observer) {
  if(!entries[0].isIntersecting) {
    navContainer.classList.add('sticky')
  } else {
    navContainer.classList.remove('sticky')
    // observer.unobserve(entries[0].target)
  }
  
}

const options = {
  treshhold: 0.1,
  rootMargin: '-90px',
}

// подгрузка секций 
const observer = new IntersectionObserver(callBack, options)

observer.observe(document.querySelector('.header'))

const allSections = document.querySelectorAll('.section')

function revealSection(entries, observe){
  if(entries[0].isIntersecting){
    entries[0].target.classList.remove('section--hidden')
    observe.unobserve(entries[0].target)
  }
  
}
const sectionObserver = new IntersectionObserver(revealSection, {threshold: 0.15})

allSections.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

// подгрузка изображений
const images = document.querySelectorAll('img[data-src]')


function loadImg(entries, observe){
  if (!entries[0].isIntersecting) return
  entries[0].target.src = entries[0].target.dataset.src
  

  entries[0].target.addEventListener('load', function() {
    entries[0].target.classList.remove('lazy-img')
  })
  observe.unobserve(entries[0].target)
}
const imgObserver = new IntersectionObserver(loadImg, {threshold: 0.15})

images.forEach(img => {
  imgObserver.observe(img)
})

//слайдер 

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0
const maxSlides = slides.length


function goToSlide(slide) {
  slides.forEach(function(s, i){
    s.style.transform = `translateX(${100 * (i - slide)}%)`
  })  
}

goToSlide(0)

function nextSlide() {
  if(currentSlide === maxSlides - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  goToSlide(currentSlide)
}

function prevSlide() {
  if(currentSlide === 0) {
    currentSlide = maxSlides - 1 
  } else {
    currentSlide--
  }
  
  goToSlide(currentSlide)
}

btnRight.addEventListener('click', nextSlide)

btnLeft.addEventListener('click', prevSlide)