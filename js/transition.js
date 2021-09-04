const link = document.querySelector('.nav-a-1');
const transition = document.querySelector('.transition');
link.addEventListener('click', function (e) {
    e.preventDefault();
    transition.classList.add('slide');
    setTimeout(() => {
        window.location = link.href;
    }, 900)
})