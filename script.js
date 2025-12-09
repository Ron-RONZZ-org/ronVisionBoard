// Vision Board Interactive Features

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
        }, index * 150);
    });

    // Add click animation to icons
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        });
    });

    // Add click feedback to image boxes
    const imageBoxes = document.querySelectorAll('.image-box');
    imageBoxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });

    // Console message
    console.log('🌟 Vision Board chargé avec succès!');
    console.log('✨ Rêver grand, planifier SMART, agir maintenant.');
});
