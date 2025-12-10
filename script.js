// Vision Board Interactive Features

// Constants
const ANIMATION_STAGGER_DELAY = 150; // milliseconds between zone animations
const ICON_ANIMATION_DURATION = 500; // milliseconds for icon rotation
const IMAGE_ANIMATION_DURATION = 300; // milliseconds for image scale

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth animations on page load
    const zones = document.querySelectorAll('.zone');
    
    zones.forEach((zone, index) => {
        zone.style.opacity = '0';
        zone.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            zone.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            zone.style.opacity = '1';
            zone.style.transform = 'translateY(0)';
        }, index * ANIMATION_STAGGER_DELAY);
    });

    // Add click animation to icons
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, ICON_ANIMATION_DURATION);
        });
    });

    // Add click feedback to image boxes
    const imageBoxes = document.querySelectorAll('.image-box');
    imageBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, IMAGE_ANIMATION_DURATION);
        });
    });

    // Console message
    console.log('🌟 Vision Board chargé avec succès!');
    console.log('✨ Rêver grand, planifier SMART, agir maintenant.');
});
