const btnMenu = document.querySelector('.fa-bars');
const menuResponsive = document.querySelector('.enlace-contacto');

btnMenu.addEventListener('click', () => {
    menuResponsive.classList.toggle('contacto-reaparece');
})