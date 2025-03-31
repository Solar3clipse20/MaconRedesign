// Slideshow Functionality
    const slides = document.querySelectorAll("#slideshow .slide img");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 1) {
        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Contact Form Validation
    const contactForm = document.querySelector("#contact-form form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {
                event.preventDefault();
                alert("Please fill in all fields before submitting.");
            } else if (!validateEmail(email)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }