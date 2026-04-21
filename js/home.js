const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    if (mobileMenu.style.right === "0px") {
        mobileMenu.style.right = "-260px";
    } else {
        mobileMenu.style.right = "0px";
    }
});

// Close menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.right = "-260px";
    });
});

// HERO SLIDESHOW
const heroSlides = document.querySelectorAll('.hero-slide');
let heroIndex = 0;

function nextHeroSlide() {
    heroSlides[heroIndex].classList.remove('active');
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('active');
}

heroSlides[0].classList.add('active'); // show first slide

setInterval(nextHeroSlide, 2000); // 2 seconds per slide
