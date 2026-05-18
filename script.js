'use strict'

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});



const cookieBar = document.querySelector('#cookieBar');
const cookieBtnOk = document.querySelector('#acceptCookies');
const goTopBtn =document.querySelector('#goTop');
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const btnOpenModal = document.querySelector('.open-modal-btn');
const modal = document.querySelector("#regModal");
const closeBtnModal = document.querySelector(".modal__close");
const overlay = document.querySelector(".modal__overlay");


if (!localStorage.getItem('cookieHidden')) {
        cookieBar.classList.add('cookie-bar--show');
    }
cookieBtnOk.addEventListener('click', () => {
        cookieBar.classList.remove('cookie-bar--show');
        localStorage.setItem('cookieHidden', 'true');
    });



window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
});
goTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



burger.addEventListener("click", () => {
    nav.classList.toggle("nav--active");
});

btnOpenModal.addEventListener('click',()=>{
    modal.classList.add("active");
});

closeBtnModal.addEventListener('click',()=>{
    modal.classList.remove('active')
});


overlay.addEventListener("click", () => {
    modal.classList.remove("active");
});
