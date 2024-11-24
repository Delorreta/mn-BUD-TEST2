 new WOW().init();
        document.querySelectorAll('.mh-progress-circle').forEach(function(el) {
            const progress = el.getAttribute('data-progress');
            el.style.setProperty('--progress', progress);
            el.textContent = progress + '%';
            });
        // JavaScript для керування каруселлю
const carousel = document.querySelector('.testimonial-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navList.classList.toggle('nav-active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".circle-content");

    circles.forEach(circle => {
        const percentage = parseInt(circle.querySelector(".percentage").innerText);
        const progress = circle.querySelector(".progress");
        const offset = 440 - (440 * percentage) / 100;
        progress.style.strokeDashoffset = offset;
    });
});
$(document).ready(function(){
        $('.testimonial-carousel').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
        });
    });