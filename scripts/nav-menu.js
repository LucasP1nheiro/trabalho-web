
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('#main-nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
});