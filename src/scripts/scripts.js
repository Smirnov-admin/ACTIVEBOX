let scrollHeader = document.querySelector('.header_element');

window.onscroll = function () {
    if (window.scrollY > 1) {
        scrollHeader.classList.add('scrolled');
    } else {
        scrollHeader.classList.remove('scrolled');
    }
};

document.querySelector('#menu__burger').addEventListener('change', function(e) {
    document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});