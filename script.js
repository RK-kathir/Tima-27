// Initialize Animate On Scroll (AOS)
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
});

// Simple Navbar color change on scroll
window.onscroll = function() {
    let nav = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        nav.style.background = "#ffffff";
        nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
};
