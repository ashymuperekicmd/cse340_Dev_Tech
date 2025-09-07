// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('nav ul');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
            
            // Animate hamburger icon
            const hamburger = document.querySelector('.hamburger');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile nav when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                mainNav.classList.remove('show');
                document.querySelector('.hamburger').classList.remove('active');
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname;
    const navItems = document.querySelectorAll('nav a');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});