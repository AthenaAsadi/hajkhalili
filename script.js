const toggleButton = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');
const overlay = document.createElement('div'); // Creating an overlay
overlay.classList.add('overlay');
document.body.appendChild(overlay);

toggleButton.addEventListener('click', function() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', function() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

document.getElementById("play-video-btn").addEventListener("click", function() {
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("about-video");

    // Toggle video visibility
    if (videoContainer.style.display === "none") {
        videoContainer.style.display = "block";
        video.play();
        this.style.display = "none"; // Hide the button after click
    }
});



var swiper = new Swiper(".swiper", {
    initialSlide: 3,
    centerSlide: true,
    loop: true,
    speed: 900,
    grabCursor: true,
    allowTouchMove: true, // Allow manual drag
    effect: "coverflow",
    coverflowEffect: {
        rotate: -10,
        stretch: -45,
        depth: 90,
        modifier: 1,
        slideShadow: true,
    },
    mousewheel: {
        thresholdDelta: 50,
        sensitivity: 1,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

// Hover effect to pause autoplay
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        swiper.autoplay.stop(); // Stop autoplay when hovering over a card
    });
    card.addEventListener('mouseleave', () => {
        swiper.autoplay.start(); // Resume autoplay when mouse leaves the card
    });
});
