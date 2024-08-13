document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const pages = document.querySelectorAll('.page');
    const pageButtons = document.querySelectorAll('.page-selector button');
    let currentPage = 0;

    function showPage(pageIndex) {
        carousel.style.transform = `translateX(-${pageIndex * 100}%)`;
        pages[currentPage].classList.remove('active');
        pages[pageIndex].classList.add('active');
        pageButtons[currentPage].classList.remove('active');
        pageButtons[pageIndex].classList.add('active');
        currentPage = pageIndex;
    }

    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageIndex = parseInt(button.getAttribute('data-page'));
            showPage(pageIndex);
        });
    });
});

