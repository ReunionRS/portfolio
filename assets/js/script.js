const $main = document.querySelector('#main');
const $form = document.querySelector('.main');

// При клике на кнопку
$main.addEventListener('click', e => {
    // Прокрутим страницу к форме
    $form.scrollIntoView({
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно
    });
});