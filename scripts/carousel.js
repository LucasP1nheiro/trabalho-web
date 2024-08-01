
const bg1 = '../assets/bg_1.jpg';
const bg2 = '../assets/bg_2.jpg';
const bg3 = '../assets/bg_3.jpg';

const images = [
    bg1,
    bg2,
    bg3
]

let currentImageIndex = 0

const nextImageButton = document.getElementById('next-image-button')

const previousImageButton = document.getElementById('previous-image-button')

nextImageButton.addEventListener('click', () => {
    currentImageIndex === images.length - 1 ? currentImageIndex = 0 : currentImageIndex++;
    banner.style.backgroundImage = `url(${images[currentImageIndex]})`;
})

previousImageButton.addEventListener('click', () => {
    currentImageIndex === 0 ? currentImageIndex = images.length - 1 : currentImageIndex--;
    banner.style.backgroundImage = `url(${images[currentImageIndex]})`;
})

setInterval(() => {
    currentImageIndex === images.length - 1 ? currentImageIndex = 0 : currentImageIndex++;
    banner.style.backgroundImage = `url(${images[currentImageIndex]})`;
}, 5000)