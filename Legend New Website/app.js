const carCard = document.querySelector('.car');

carCard.addEventListener('click', (e) => {
    e.stopPropagation(); 
    carCard.classList.add('zoom');
    console.log('Hello')
});

window.addEventListener('click', () => {
    carCard.classList.remove('zoom');
});
