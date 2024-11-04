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
