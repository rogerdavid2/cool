let menuToggle = document.querySelector('.menu-toggle');
let menuClose = document.querySelector('.menu-close');
let menu = document.querySelector('.menu');

let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let images = Array.from(document.querySelectorAll('.image'));

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

function openMenu() {
    menu.classList.add('active');
    navLinks.forEach((link, idx) => {
        setTimeout(() => {
            link.classList.add('active');
        }, idx * 100)
    })
}

function closeMenu() {
    menu.classList.remove('active');
    setTimeout(() => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        }, 100)
    })
}

window.addEventListener('DOMContentLoaded', function (e) {
    images.forEach((image, idx) => {
        setTimeout(() => {
            image.classList.add('active');
        }, idx * 100)
    })
})