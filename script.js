window.onload = function() {
    // Ссылки меню футера для плавного скроллинга
    const menuLinks = document.querySelectorAll('.footer-menu ul li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Останавливаем стандартное поведение ссылки

            // Получаем идентификатор целевого элемента
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Плавно прокручиваем страницу к целевому элементу
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Мобильное меню (гамбургер)
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.querySelector('.basic');

    // Добавляем слушатель события для иконки гамбургера
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            menuContainer.style.display = 'block'; // Показываем меню
        } else {
            menuContainer.style.display = 'none'; // Скрываем меню
        }
    });
};
