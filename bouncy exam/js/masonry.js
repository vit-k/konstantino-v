;(function ($) {
    $('.main-iso').isotope({
        itemSelector: '.item'
    });

    $('.iso-nav ul li').click(function () {
        $('.iso-nav ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.main-iso').isotope({
            filter: selector
        });
        return false;
    })
})(jQuery);

(function ($) {
        $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'packery'
    });

})(jQuery);