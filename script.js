document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11MZ4O.img",
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msKEu.img",
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msMpx.img"
    ];

    let currentIndex = 0;
    const imageSlider = document.getElementById('image-slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function updateImage() {
        imageSlider.src = images[currentIndex];
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    updateImage();
});

