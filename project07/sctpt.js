document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.links');

    if (menuToggle && links) {
        menuToggle.addEventListener('click', () => {
            links.classList.toggle('active'); // Show or hide the links
        });
    }
});
