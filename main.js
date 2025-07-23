// script.js

// --- 1. Show/Hide Scroll Up button ---
const scrollUp = () => {
    const scrollUpButton = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    this.scrollY >= 350 ? scrollUpButton.classList.add('show-scroll')
                        : scrollUpButton.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);


// --- 2. Active Link State on Scroll (Optional but good for UX) ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links .nav__link');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjust based on your fixed nav height
        const sectionId = current.getAttribute('id');
        const correspondingNavLink = document.querySelector('.nav-links a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingNavLink.classList.add('active');
        } else {
            correspondingNavLink.classList.remove('active');
        }
    });
};
window.addEventListener('scroll', scrollActive);

// Initial call to set active link on page load
scrollActive();


// --- 3. Smooth Scroll for Navigation Links (if not handled by scroll-behavior: smooth;) ---
// If you want a custom smooth scroll or if CSS scroll-behavior isn't enough, you can add this:
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// For the "Let's Talk" button
document.querySelector('.hero-section .button.primary').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
