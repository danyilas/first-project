$(document).ready(() => {
    $('.countup').each(function() {
        const that = $(this);
        const countTo = that.attr('data-end');

        if (countTo && !isNaN(countTo)) {
            $({ countNum: 0 }).animate(
                { countNum: countTo },
                {
                    duration: 8000,
                    easing: 'linear',
                    step: function() {
                        that.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        that.text(this.countNum);
                    }
                }
            );
        } else {
            console.error('Неверное значение для data-end:', countTo);
        }
    });
});
