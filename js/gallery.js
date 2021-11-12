/* Close overlay with exit button */
const exit = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
exit.addEventListener('click', close);
function close() {
    overlay.classList.remove('active');
}

/* Using querySelectorAll requires a for each loop*/
function moveImages(rLmover) {
    rLmover.forEach(move => {
        move.addEventListener('click', function () {
            console.log('moved')
        })
    });
}

const movers = document.querySelectorAll('.btn');
moveImages(movers);

const movedImg = document.querySelector('.overlayImage');

/*
    Add an event listener to each image and 
    obtain the url to display inside modal
*/
const imageButtons = document.querySelectorAll('.project');
function displayImages(btns) {
    btns.forEach(button => {
        button.addEventListener("click", () => {
            const imageSource = button.children[0].src;
            gImages.src = imageSource;
            overlay.classList.add('active');
        })
    });
}

displayImages(imageButtons);

const gImages = document.querySelector('.overlayImage');