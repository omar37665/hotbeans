// Simple navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Simple form handling
    const form = document.querySelector('.application-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thanks for applying! We\'ll get back to you soon.');
            form.reset();
        });
    }
    
    // Simple scroll effect for navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = '#1e40af';
        } else {
            nav.style.background = '#2563eb';
        }
    });
});

// Add some basic interactivity
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});