// function navMenu() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('#main-nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
});