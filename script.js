// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust offset if needed
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered animations and active link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 50;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.pageYOffset;

        // Scroll-triggered animations
        if (scrollPos >= sectionTop - window.innerHeight / 1.3) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }

        // Highlighting active navigation link
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});
