document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'img/banner.png',
        'img/banner.png',
        'img/banner.png',
        'img/banner.png'
    ];
    
    let currentIndex = 0;
    const bannerImg = document.querySelector('.banner_img');
    const countDisplay = document.getElementById('banner-slider__count').querySelector('span');

    function updateSlider() {
        bannerImg.src = images[currentIndex];
        countDisplay.textContent = `${(currentIndex + 1).toString().padStart(2, '0')} / ${images.length.toString().padStart(2, '0')}`;
    }

    document.getElementById('btn-left-js').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSlider();
    });

    document.getElementById('btn-right-js').addEventListener('click', function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Initialize slider
    updateSlider();
});