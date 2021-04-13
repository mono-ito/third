
function toggleNav() {
    let body = document.body
    let menu = document.getElementById('l-header__hamburger');
    let block = document.getElementById('l-header__block');

    menu.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    block.classList.toggle('nav-open');

    });
 }
 toggleNav();
