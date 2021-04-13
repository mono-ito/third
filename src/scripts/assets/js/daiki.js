
function toggleNav() {
    let body = document.body
    let menu = document.getElementById('p-header__hamburger');
    let line = document.getElementsByClassName('c-hamburger__line');
    console.log(line);
    menu.addEventListener('click', () => {
    line.classList.toggle('is-open');
    });
 }
 toggleNav();
