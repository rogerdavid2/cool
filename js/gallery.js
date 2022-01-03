const galleryImgs = [...document.querySelectorAll('.gallery-img')];
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxContainer = document.querySelector('.lightbox-modal');
const lastImage = galleryImgs.length - 1;

const lightboxBtns = document.querySelectorAll('.btn');
const btnRight = document.querySelector('#right');
const btnLeft = document.querySelector('#left');
const btnClose = document.querySelector('.close');
let renderImage;

function showLightBox() {
    lightboxContainer.classList.add('active');
}

function hideLightBox() {
    lightboxContainer.classList.remove('active');
}

function activeImage(image) {
    lightboxImg.src = image.dataset.imagesrc;
    renderImage = galleryImgs.indexOf(image);
    switch (renderImage) {
        case 0:
            btnLeft.classList.add('inactive');
            break
        case lastImage:
            btnRight.classList.add('inactive');
            break
        default:
            lightboxBtns.forEach(btn => {
                btn.classList.remove('inactive');
            })
    }
}

function slideLeft() {
    btnLeft.focus();
    if (renderImage === 0) {
        activeImage(galleryImgs[lastImage])
    } else {
        activeImage(galleryImgs[renderImage].previousElementSibling)
    }
}

function slideRight() {
    btnRight.focus();
    if (renderImage === lastImage) {
        activeImage(galleryImgs[0])
    } else {
        activeImage(galleryImgs[renderImage].nextElementSibling)
    }
}

function slide(moveItem) {
    if (moveItem.includes('left')) {
        slideLeft();
    } else {
        slideRight();
    }
}

galleryImgs.forEach(image => {
    image.addEventListener('click', (e) => {
        showLightBox();
        activeImage(image);
    })
})

btnClose.addEventListener('click', () => {
    hideLightBox()
});

lightboxBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        slide(e.currentTarget.id);
    })
})
