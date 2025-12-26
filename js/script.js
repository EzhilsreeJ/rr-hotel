document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic form validation (can be enhanced)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                e.preventDefault(); // Prevent form submission
            } else {
                // In a real application, you would send this data to a server.
                // For this static example, we'll just show a success message.
                alert('Message sent successfully!');
                contactForm.reset(); // Clear the form
                e.preventDefault(); // Prevent default form submission to reload page
            }
        });
    }

    // Example: Add subtle animations on scroll (optional)
    const animatedElements = document.querySelectorAll('.feature-item, .room-item, .gallery-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add a class for styling when elements become visible
    const style = document.createElement('style');
    style.innerHTML = `
        .is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .feature-item, .room-item, .gallery-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
    `;
    document.head.appendChild(style);

});