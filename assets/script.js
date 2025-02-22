// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Yosi Express landing page!');

    // Smooth scrolling for internal links (if needed)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation before submission
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', function(e) {
        const email = document.querySelector('#form-email').value;
        const message = document.querySelector('#message').value;

        if (email === '' || message === '') {
            e.preventDefault();  // Prevent submission only if fields are empty
            alert('אנא מלא את כל השדות');
        }
    });
});
