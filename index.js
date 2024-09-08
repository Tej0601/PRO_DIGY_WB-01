document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const changeNavbarColor = () => {
        const scrollPosition = window.scrollY;
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#465469";
        } else {
            navbar.style.backgroundColor = "#1D232C";
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
});