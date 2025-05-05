// Toggle active class
const navbarMenu = document.querySelector ('.nav-bar-menu');
document.querySelector('#hamburger-menu').onclick = ( ) => {
    navbarMenu.classList.toggle('active');
}

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbarMenu.classList.remove('active');
    }
});

// Slide Show
// document.addEventListener('DOMContentLoaded', function() {
//     const slideshowItems = document.querySelectorAll('.hero-slideshow-item');
//     let currentSlide = 0;

//     function showSlide(index) {
//         slideshowItems.forEach(item => {
//             item.classList.remove('active');
//         });

//         slideshowItems[index].classList.add('active');
//     }

//     showSlide(currentSlide);

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slideshowItems.length;
//         showSlide(currentSlide);
//     }

//     setInterval(nextSlide, 3000);
// });

