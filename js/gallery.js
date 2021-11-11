const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', close);
function close() {
    overlay.classList.remove('active');
}

/* Using querySelectorAll requires a for each loop*/
const movers = document.querySelectorAll('.btn');
movers.forEach(move => {
    move.addEventListener('click', function () {
        console.log('works');
    })
});

const divButtons = document.querySelectorAll('.project');
divButtons.forEach(button => {
    button.addEventListener("click", () => {
        const imageSource = button.children[0].src;
        gImages.src = imageSource;
        overlay.classList.add('active');
    })
});

const gImages = document.querySelector('.overlayImage');