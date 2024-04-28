// Smooth Scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const href = link.getAttribute('href').substring(1);
        const section = document.getElementById(href);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar Hide/Show on Scroll
let prevScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    const navbar = document.getElementById('navbar');

    if (prevScroll > currentScroll) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-80px';
    }
    prevScroll = currentScroll;
});

// Email Form (Simulation)
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (Email sending not implemented)');

    // In a real application, implement email sending using a backend service. 
});

const aboutImages = document.querySelectorAll('.about-image');
const productImages = document.querySelectorAll('.product-image');
const zoomedImage = document.querySelector('.zoomed-image');

productImages.forEach(image => {
    image.addEventListener('click', () => {
        zoomedImage.src = image.src;
        zoomedImage.style.display = 'block'; // Show zoomed image
    });
});

aboutImages.forEach(image => {
    image.addEventListener('click', () => {
        zoomedImage.src = image.src;
        zoomedImage.style.display = 'block'; // Show zoomed image
    });
});

// Close zoomed image (clicking outside)
window.addEventListener('click', (event) => {
    if (event.target === zoomedImage) {
        zoomedImage.style.display = 'none'; // Hide zoomed image
    }
});

