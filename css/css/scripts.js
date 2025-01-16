// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.education-box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.05)'; // Agrandit la boîte
            box.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)'; // Ombre plus prononcée
        });

        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)'; // Rétablit la taille originale
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Ombre normale
        });
    });
});
