document.addEventListener('DOMContentLoaded', function() {
    const scrollableBanners = document.querySelectorAll('.scrollable-banner');
    const scrollSpeed = 0.5; 

    let initialPositions = new Map();

    scrollableBanners.forEach(banner => {
        initialPositions.set(banner, 0);
    });

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        scrollableBanners.forEach(banner => {
            let rect = banner.getBoundingClientRect();
            let bannerTop = rect.top + scrollTop;
            let bannerBottom = bannerTop + rect.height;
            
            if (scrollTop > bannerTop && scrollTop < bannerBottom) {
                let scrollProgress = scrollTop - bannerTop;
                let newPosition = Math.round(scrollProgress * scrollSpeed);
                
                
                newPosition = Math.max(0, newPosition);
                
                initialPositions.set(banner, newPosition);
                banner.style.backgroundPosition = `50% ${newPosition}px`;
            }
        });
    });
});