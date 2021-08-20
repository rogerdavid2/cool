"use scrict";

const checkBox = document.querySelector('#active');
const navBar = document.querySelector('.nav');
const info = document.querySelectorAll('.contact');

checkBox.addEventListener('click', expandCircle);

function expandCircle(e) {
    if (checkBox.checked) {
        navBar.style.clipPath = "circle(75%)"
        document.querySelectorAll('.menu-a')[0].style.display = 'block';
        document.querySelectorAll('.menu-a')[1].style.display = 'block';
        document.querySelectorAll('.contact')[0].style.display = 'block';
        document.querySelectorAll('.contact')[1].style.display = 'block';
        document.querySelectorAll('.contact')[2].style.display = 'block';
    } else {
        navBar.style.clipPath = "circle(0%)"
        document.querySelectorAll('.menu-a')[0].style.display = 'none';
        document.querySelectorAll('.menu-a')[1].style.display = 'none';
        document.querySelectorAll('.contact')[0].style.display = 'none';
        document.querySelectorAll('.contact')[1].style.display = 'none';
        document.querySelectorAll('.contact')[2].style.display = 'none';
    }
}