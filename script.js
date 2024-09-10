document.addEventListener(
    'DOMContentLoaded', function() 
    {
    const images = [
        "https://cdn.pixabay.com/photo/2024/05/23/12/24/ai-generated-8783105_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/02/21/11/42/ai-generated-8587534_1280.jpg",
        "https://cdn.pixabay.com/photo/2024/04/09/16/30/ai-generated-8686301_1280.jpg"
    ];

    let currentIndex = 0;
    const imageSlider = document.getElementById('image-slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function updateImage() {
        imageSlider.classList.add('fade-out');
        setTimeout(()=>{
            imageSlider.src=images[currentIndex];
            imageSlider.classList.remove('fade-out');
        },1000)
       
    }

    function nextImage(){
        currentIndex=(currentIndex+1)%images.length;
        updateImage();
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    setInterval(nextImage, 5000);
    updateImage();
    }
);

function learnMore() {
    alert("about us。。。");
}


