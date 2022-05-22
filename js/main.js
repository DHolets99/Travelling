(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 70) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    }
}());

//burger handler start//

(function () {
    const burgerItem = document.querySelector ('.burger');
    const menu = document.querySelector ('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');

    burgerItem.addEventListener('click', () => {
        menu.classList.add ('header_nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove ('header_nav-active');
    });

}())

//burger handler end//
