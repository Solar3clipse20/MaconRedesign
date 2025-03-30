// JavaScript for the Macon County Website

document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scrolling Navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Photo Slideshow for the Homepage
    let currentSlide = 0;
    const slides = document.querySelectorAll('#hero img');
    const totalSlides = slides.length;

    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none';  // Hide all slides
        });
        currentSlide = (currentSlide + 1) % totalSlides;  // Go to next slide, loop back to first
        slides[currentSlide].style.display = 'block';  // Show the current slide
    }

    // Automatically change slide every 5 seconds
    setInterval(changeSlide, 5000);
    changeSlide(); // Initialize first slide display

    // Form Validation for Contact Page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');

            let isValid = true;

            // Simple validation for empty fields
            if (!name.value.trim()) {
                alert('Please enter your name.');
                isValid = false;
            }
            if (!email.value.trim() || !validateEmail(email.value)) {
                alert('Please enter a valid email address.');
                isValid = false;
            }
            if (!message.value.trim()) {
                alert('Please enter your message.');
                isValid = false;
            }

            // If all inputs are valid, alert success (or submit to server)
            if (isValid) {
                alert('Your message has been submitted!');
                contactForm.reset();  // Reset the form
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Event Filter for Upcoming Events Page
    const eventFilter = document.getElementById('event-filter');
    if (eventFilter) {
        eventFilter.addEventListener('change', function () {
            const filterValue = eventFilter.value.toLowerCase();
            const events = document.querySelectorAll('.event');
            events.forEach(event => {
                const eventCategory = event.getAttribute('data-category').toLowerCase();
                if (eventCategory.includes(filterValue) || filterValue === '') {
                    event.style.display = 'block';
                } else {
                    event.style.display = 'none';
                }
            });
        });
    }

    // Hide / Show Navbar on Scroll
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-80px';  // Hide header when scrolling down
        } else {
            header.style.top = '0';  // Show header when scrolling up
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;  // Prevent going negative
    });

});