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

// Scroll-triggered animations
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3; // Adjust this ratio as needed
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Example animation: Fade-in effect
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s ease-out';
});

document.querySelectorAll('.visible').forEach(section => {
    section.style.opacity = 1;
});
