document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.links');

    if (menuToggle && links) {
        menuToggle.addEventListener('click', () => {
            links.classList.toggle('active'); // Add or remove the "active" class
        });
    } else {
        console.error('Menu toggle or links element not found.');
    }
});
