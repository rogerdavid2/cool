let imageItems = [...document.querySelectorAll('.img_wrap')];
let imageCaptions = [...document.querySelectorAll('.h4-div')];

let options = {
    rootMargin: '0px',
    threshold: .9
}

let setItemActive = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    })
}

let observer = new IntersectionObserver(setItemActive, options);

imageItems.forEach(item => {
    observer.observe(item);
});

imageCaptions.forEach(div => {
    observer.observe(div);
})