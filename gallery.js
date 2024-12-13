document.addEventListener('DOMContentLoaded', function () {
    // Инициализация слайдера с помощью Bootstrap
    let carouselElement = document.querySelector('#carouselExampleIndicators');
    let carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Время между слайдами в миллисекундах (3 секунды)
        ride: 'carousel' // Автоматический запуск слайдера при загрузке страницы
    });

    // Добавление функциональности для кнопок (если нужно)
    let nextButton = document.querySelector('.carousel-control-next');
    let prevButton = document.querySelector('.carousel-control-prev');

    nextButton.addEventListener('click', function () {
        carousel.next(); // Переход к следующему слайду
    });

    prevButton.addEventListener('click', function () {
        carousel.prev(); // Переход к предыдущему слайду
    });
});