document.addEventListener("DOMContentLoaded", () => {
    // Mobile Responsive Navbar Selectors
    const navToggle = document.getElementById("nav-toggle");
    const navLinksContainer = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Toggle menu state interface
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
        });
    }

    // Auto close expanded wrapper upon user target navigation selection
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinksContainer && navLinksContainer.classList.contains("active")) {
                navLinksContainer.classList.remove("active");
            }
        });
    });

    // Sub-routine logic to dynamic compress header sizing upon window tracking stream
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = "10px 0";
                navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
            } else {
                navbar.style.padding = "15px 0";
                navbar.style.boxShadow = "none";
            }
        }
    });
});