const scrollable = document.querySelector('.scrollable');
const content = document.querySelector('.content');

const wraps = [...document.querySelectorAll('.wrap')];
const menuTog = document.querySelector('.menu-tog');
const menu = document.querySelector('.menu');
const menuWraps = [...document.querySelectorAll('.menu-wrap')];

// Set scroll dimensions
function init() {
    document.body.style.height = `${content.getBoundingClientRect().height}px`;
}

window.addEventListener('resize', init);
menuTog.addEventListener('click', toggleMenu)

function displayWraps() {
    wraps.forEach((wrap, idx) => {
        setTimeout(() => {
            wrap.classList.add('active');
        }, (idx + 1) * 50)
    })
}

function toggleMenu() {
    if (menu.classList.contains('active')) {
        menuTog.classList.remove('active');
        toggleMenuWraps(false);
        setTimeout(() => {
            menu.classList.remove('active')
        }, 300)
        setTimeout(() => {
            toggleWraps(true);
        }, 300)
    } else {
        menuTog.classList.add('active');
        toggleWraps(false);
        setTimeout(() => {
            menu.classList.add('active')
        }, 300)
        setTimeout(() => {
            toggleMenuWraps(true);
        }, 300)
    }
}

function toggleWraps(active) {
    wraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}

function toggleMenuWraps(active) {
    menuWraps.forEach(wrap => {
        toggleWrap(wrap, active);
    })
}

function toggleWrap(wrap, active) {
    setTimeout(() => {
        if (active) {
            wrap.classList.add('active');
        } else {
            wrap.classList.remove('active');
        }
    })
}

const link = document.querySelector('.one');
const transition = document.querySelector('.transition');


link.addEventListener('click', function (e) {
    e.preventDefault();
    transition.classList.add('slide');
    setTimeout(() => {
        window.location = link.href;
    }, 900)
})

/* Intersection Observer */
let ob = document.querySelectorAll('.ob');
let oLay = document.querySelectorAll('.overlay');
let aboutT = document.querySelectorAll('.intro');
let pictures = document.querySelectorAll('.pic');
let car = document.querySelectorAll('.carousel')

let options = {
    rootMargin: '-10px',
    threshold: 0.0
}

let setItemActive = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('on');
            console.log('Observed');
        }
    })
}

let observer = new IntersectionObserver(setItemActive);

ob.forEach((item) => {
    observer.observe(item);
})

pictures.forEach((item) => {
    observer.observe(item)
})

oLay.forEach(item => {
    observer.observe(item);
})

aboutT.forEach((item) => {
    observer.observe(item);
})

car.forEach((item) => {
    observer.observe(item);
})


displayWraps()
init()