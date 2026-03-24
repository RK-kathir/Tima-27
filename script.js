// This script adds an interactive shadow and slight size change to the navbar when scrolling
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            // When user scrolls down
            navbar.style.padding = "0.5rem 1rem";
            navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            // When user is at the very top
            navbar.style.padding = "1rem";
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

    // Smooth scrolling for all navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only apply if the link goes to an ID on the same page
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60, // offset for the sticky navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
