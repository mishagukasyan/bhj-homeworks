const banner = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function () {
    const viewportHeight = window.innerHeight;

    for (let element of banner) {        
        const bannerTop = element.getBoundingClientRect().top;
        
        if (bannerTop < viewportHeight && bannerTop > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    }
});