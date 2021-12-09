const overlayIntro = document.querySelector('.overlay-intro');
const scrollBtn = document.querySelector('.nav-link');
const scrollBtn2 = document.querySelector('.nav-link2');


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        overlayIntro.querySelector('h1').style.color = '#171717';
        setTimeout(() => {
            overlayIntro.querySelector('h1').style.opacity = '.7';
        }, 600)
    }, 1000)
    setTimeout(() => {
        overlayIntro.style.opacity = 0;
    }, 3000)
})

