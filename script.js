document.addEventListener('DOMContentLoaded', () => {

    // Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    const navIcons = document.querySelectorAll('.nav-icon');

    // Add reveal class to necessary elements for scroll animation
    const revealElements = document.querySelectorAll('.about-simple-box, .bento-card, .contact-wrap');
    revealElements.forEach(el => el.classList.add('reveal'));

    window.addEventListener('scroll', () => {
        let current = '';

        // Active Link Highlighting
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navIcons.forEach(icon => {
            icon.classList.remove('active');
            if (icon.getAttribute('href') === `#${current}`) {
                icon.classList.add('active');
            }
        });

        // Scroll Reveal Animations
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    });

    // Initial check for animations on load
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });

    // Smooth Scroll for exact position
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Determine offset based on whether there's a top navbar (here we don't really have one, just bottom capsule)
                // We'll just scroll to exactly the element's top.
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        // Add a slight delay so it's visible for a moment
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 2200);
    }
});
