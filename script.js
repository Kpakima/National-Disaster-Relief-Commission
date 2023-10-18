const navList = document.querySelector('.nav-list');
const navMenu = document.querySelector('.nav-menu');
const navClose = document.querySelector('.nav-close');
const bgOverLay = document.querySelector('.bg-overlay');


const navOpenF = () => {
    navList.classList.add('show');
    bgOverLay.classList.add('active');
    document.body.style='visibility: visible; width: 100vw; height: 100vh; overflow: hidden;';

}

const navCloseF = () => {
    navList.classList.remove('show');
    bgOverLay.classList.remove('active');
    document.body.style='visibility: visible; width: 100%; height: initial; overflow-x: hidden';
}

navMenu.addEventListener('click', navOpenF);
navClose.addEventListener('click', navCloseF);
bgOverLay.addEventListener('click', navCloseF);

