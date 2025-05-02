var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2, // Keep 2 slides visible
    spaceBetween: 20, // Reduce space for a tighter look
    centeredSlides: false, // Proper alignment without centering each slide
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        }
    }
});
