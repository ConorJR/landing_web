"use strict";

const anchors = document.querySelectorAll('a[href^="#"]');

const btn2 = document.querySelector('.modal-btn-2');
const closeBtn2 = document.querySelector('.close-modal-btn-2');
const modal2 = document.getElementById('modal-2');

anchors.forEach(l => {
    l.addEventListener('click', (event) => {
        const href = l.getAttribute('href');
        
        if (href === '#' || href === '') return;

        const targetId = href.substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            event.preventDefault();
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

btn2.addEventListener('click', () => {
    modal2.showModal();
});
closeBtn2.addEventListener('click', () => {
    modal2.close();
})