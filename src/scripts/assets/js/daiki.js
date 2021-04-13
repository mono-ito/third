
function toggleNav() {
    let body = document.body
    let menu = document.getElementById('l-header__hamburger');
    let line = document.getElementsByClassName('l-hamburger__line');
    menu.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    });
 }
 toggleNav();
