document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('navHamburger');
    const nav = document.getElementById('mainNav');
    const overlay = document.getElementById('navOverlay');

    if (!hamburger || !nav || !overlay) return;

    function openNav() {
        nav.classList.add('open');
        overlay.classList.add('active');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
    }

    function closeNav() {
        nav.classList.remove('open');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', () => {
        nav.classList.contains('open') ? closeNav() : openNav();
    });

    overlay.addEventListener('click', closeNav);

    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeNav);
    });
});
