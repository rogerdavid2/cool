const scrollContainer = document.querySelector('.scroll-container');
const projectImages = Array.from(document.querySelectorAll('img'));
const navBar = document.querySelector('.nav-bar');
const aboutS = document.querySelector('.s-about');

const projectsSection = document.querySelector('.projects');
const projectTitle = document.querySelector('.proj-title');


var isScrolling = false;

let current = 0;
let target = 0;
let ease = 0.1;

function setDocumentHeight() {
    document.body.style.height = `${scrollContainer.getBoundingClientRect().height}px`;
}

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function animate() {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollContainer.style.transform = `translate3d(0, ${-current}px, 0)`;
    animateProjects();
    requestAnimationFrame(animate);
}

function animateProjects() {
    let { top, height } = projectsSection.getBoundingClientRect();
    if (top <= 0 && top >= -(height * 0.5)) {
        projTop = -top;
    } else if (top > 0) {
        projTop = 0
    } else {
        projTop = height * 0.5
    }
    projectTitle.style.transform = `translate3d(0, ${projTop}px,0)`;
    for (let i = 0; i < projectImages.length; i++) {
        let { top } = projectImages[i].parentElement.getBoundingClientRect();
        if (i % 2 == 0) {
            projectImages[i].style.transform = `translate3d(0, ${top * 0.9}px, 0) rotate(${top * 0.04}deg)`;
        } else {
            projectImages[i].style.transform = `translate3d(0, ${top * 0.1}px, 0) rotate(${top * 0.04}deg)`;
        }
    }
}

function throttle(animate, time) {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
            animate();
            isScrolling = false;
        }, time)
        console.log(isScrolling);
    }
    return;
}

window.addEventListener('scroll', function () {
    throttle(animate, 250);
})

setDocumentHeight();
