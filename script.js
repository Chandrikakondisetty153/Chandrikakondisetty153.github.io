// Smooth scrolling to sections when clicking navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered animations for sections
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade-in');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    elements.forEach(function(element) {
        let elementPosition = element.getBoundingClientRect().top + scrollTop;
        let windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > elementPosition) {
            element.classList.add('show');
        }
    });
});
