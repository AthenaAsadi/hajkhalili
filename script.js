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