$(document).ready(function () {
    let currentTestimonialIndex = 0;
    const testimonialsRows = $('.testimonials-row');
    const controls = $('.testimonials-controls .control-item');

    function updateTestimonial() {
        testimonialsRows.hide();
        $(testimonialsRows[currentTestimonialIndex]).fadeIn();
        controls.removeClass('active');
        $(controls[currentTestimonialIndex]).addClass('active');
    }

    controls.click(function () {
        currentTestimonialIndex = $(this).index();
        updateTestimonial();
    });

    updateTestimonial();

    function showModal(imageSrc) {
        const modalHtml = `
        <div class="modal-overlay" id="modal-overlay">
            <div class="modal-content">
                <img src="${imageSrc}" class="modal-image" alt="Изображение">
                <button class="close-modal" id="close-modal">Закрыть</button>
            </div>
        </div>`;
        $('body').append(modalHtml);

        // Закрытие модального окна
        $('#close-modal').click(function () {
            $('#modal-overlay').remove();
        });

        $('#modal-overlay').click(function (e) {
            if ($(e.target).is('#modal-overlay')) {
                $(this).remove();
            }
        });
    }

    $('.pictures-item').on('click', function () {
        const imageSrc = $(this).data('src');
        if (imageSrc) {
            showModal(imageSrc);
        } else {
            console.error('Источник изображения не найден');
        }
    });
});

