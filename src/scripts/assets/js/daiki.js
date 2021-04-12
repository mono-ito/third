{
    const menu = document.getElementById('p-header__hamburger);
    const line = document.querySelectorAll('c-header__line');

    menu.addEventListener('click', () => {
        line.classList.add('is-open');
    });
}