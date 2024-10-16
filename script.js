

window.addEventListener('DOMContentLoaded', () => {
    const headerGreeting = document.querySelector('header h1');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning, Real Madrid Fans!";
    } else if (hours < 18) {
        greeting = "Good Afternoon, Real Madrid Fans!";
    } else {
        greeting = "Good Evening, Real Madrid Fans!";
    }

    headerGreeting.textContent = `${greeting}`;
});

window.addEventListener('scroll', () => {
    const playersSection = document.querySelector('.player-cards');
    const sectionPosition = playersSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        playersSection.style.opacity = '1';
    }
});

// Animation trigger for stadiums section when it comes into view
window.addEventListener('scroll', () => {
    const stadiumsSection = document.querySelector('.stadium-gallery');
    const sectionPosition = stadiumsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        stadiumsSection.style.opacity = '1';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// JavaScript for the image carousel
const stadiumImages = [
    'santiagobernabue.jpg',
    'CiudadRealMadrid_EstadioDiStefano.jpeg',
    'ciudad.jpg',
    'VALDEBEBAS.jpg'
];
const stadiumNames = [
    'Santiago Bernabéu Stadium',
    'Estadio Alfredo Di Stéfano',
    'Estadio Santiago Bernabéu (Remodel)',
    'Estadio de Vallecas'
];

let currentIndex = 0; // Track the current image index

const stadiumImage = document.getElementById('stadiumImage');
const stadiumName = document.getElementById('stadiumName');

function updateStadium() {
    stadiumImage.src = stadiumImages[currentIndex]; // Update the image source
    stadiumName.textContent = stadiumNames[currentIndex]; // Update the stadium name
    stadiumName.style.opacity = '0'; // Start invisible
    stadiumName.style.transform = 'translateY(-20px)'; // Start slightly above
    setTimeout(() => {
        stadiumName.style.opacity = '1'; // Fade in
        stadiumName.style.transform = 'translateY(0)'; // Move to original position
    }, 100); // Delay before starting the fade-in
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % stadiumImages.length; // Move to the next image
    updateStadium(); // Call function to update image and name
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + stadiumImages.length) % stadiumImages.length; // Move to the previous image
    updateStadium(); // Call function to update image and name
});

// Initialize with the first stadium
updateStadium();

function flipCard(card) {
    card.classList.toggle('flipped');
}
