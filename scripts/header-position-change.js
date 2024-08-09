document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const themeToggle = document.getElementById('themeToggle');
    let lastScrollTop = 0;
    const scrollThreshold = 300; 

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > scrollThreshold && scrollTop > lastScrollTop) {
            // Scrolling down past the threshold
            header.classList.add('fixed');
            themeToggle.classList.add('fixed');
        } else if (scrollTop <= scrollThreshold) {
            // Scrolled back to the top
            header.classList.remove('fixed');
            themeToggle.classList.remove('fixed');
        }

        lastScrollTop = scrollTop;
    });
});