const nav = document.querySelector('.nav');
const navSec = document.querySelector('.navSec');
const menu = document.getElementById('menu')
const close = document.querySelector('.cancel');

menu.addEventListener('click', (openMenu) => {
    nav.style.display = "block"
    menu.style.display = "none";
    close.style.display = "block"
})

close.addEventListener('click', (closeMenu) => {
    nav.style.display = "none"
    menu.style.display = "block";
    close.style.display = "none"
})