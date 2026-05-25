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
const animateItems = document.querySelectorAll('.animate-on-scroll');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('header--sticky');
    } else {
        header.classList.remove('header--sticky');
    }
});


regForm.addEventListener('submit', (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (!emailRegex.test(emailInput.value)) {
        event.preventDefault();
        emailInput.style.borderColor = 'red';
        alert('Будь ласка, введіть коректну email адресу!');
    } else {
        emailInput.style.borderColor = 'green';
        alert('Успішна реєстрація на курс!');
        closeModal();
    }
});

if (animateItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated'); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animateItems.forEach(item => { observer.observe(item); });
}

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
