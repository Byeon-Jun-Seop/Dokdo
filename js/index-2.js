$(function () {
    $('.nav-2 li').click(function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
        var i = $(this).index()
        $('.title-2').fadeOut()
        $('.title-2').eq(i).fadeIn()

    })

    var $grid = $('.grid').imagesLoaded(function () {
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    });

})