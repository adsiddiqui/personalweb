// Add click handlers to work and project images
document.addEventListener('DOMContentLoaded', function() {
    // Work experience modals
    document.querySelector('.featured-work .work-image').addEventListener('click', () => openModal('landgate-modal'));
    document.querySelectorAll('.secondary-works .work-card').forEach((card, index) => {
        if (index === 0) card.querySelector('.work-image').addEventListener('click', () => openModal('neu-modal'));
        if (index === 1) card.querySelector('.work-image').addEventListener('click', () => openModal('stvdio-modal'));
    });

    // Project modals
    document.querySelectorAll('.project-card').forEach((card, index) => {
        if (index === 0) card.querySelector('.project-image').addEventListener('click', () => openModal('homescope-modal'));
        if (index === 1) card.querySelector('.project-image').addEventListener('click', () => openModal('newsyn-modal'));
    });

    // Close buttons
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
    
    // Show elements
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Trigger animations
    requestAnimationFrame(() => {
        modal.classList.add('active');
        overlay.classList.add('active');
    });

    // Close modal when clicking overlay
    overlay.addEventListener('click', closeModal);
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.modal-overlay');
    
    // Trigger closing animations
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    if (overlay) {
        overlay.classList.remove('active');
    }
    
    // Wait for animations to finish
    setTimeout(() => {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        if (overlay) {
            overlay.remove();
        }
        document.body.style.overflow = 'auto';
    }, 250); // Match new transition duration
}

// Simplified scroll behavior
let lastScrollTop = 0;
const nav = document.querySelector('.page-links');
const heroContent = document.querySelector('.hero-content');
const introText = document.querySelector('.intro-text');
const scrollThreshold = 20;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    // Scrolling down
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        nav.style.opacity = '0';
        if (heroContent) {
            heroContent.style.opacity = '0';
        }
        if (introText) {
            introText.style.opacity = '0';
        }
    } 
    // Scrolling up or at top
    else {
        nav.style.opacity = '1';
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
        if (introText) {
            introText.style.opacity = '1';
        }
    }
    
    lastScrollTop = scrollTop;
}); 