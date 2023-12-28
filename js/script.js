document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const totalSlides = document.querySelectorAll(".slide").length;

    function showSlide(index) {
        const slider = document.querySelector(".slider");
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000);

    showSlide(currentIndex);
});
