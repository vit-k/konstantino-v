;(function ($) {
    $('.button-scroll').on('click', function () {
        $('html body').animate({'scrollTop': $('#portfolio').offset().top}, 700);
        return false
    });
})(jQuery);

(function ($) {
    $('.li-for-team').on('click', function () {
        $('html body').animate({'scrollTop': $('#team').offset().top}, 700);
        return false
    });
})(jQuery);

(function ($) {
    $('.li-for-portfolio').on('click', function () {
        $('html body').animate({'scrollTop': $('#portfolio').offset().top}, 700);
        return false
    });
})(jQuery);

(function ($) {
    $('.li-for-contact').on('click', function () {
        $('html body').animate({'scrollTop': $('#contact').offset().top}, 700);
        return false
    });
})(jQuery);

