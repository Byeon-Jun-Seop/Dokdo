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

    var $grid = $('#number_2 .grid').imagesLoaded(function () {
        $grid.isotope({
            itemSelector: '#number_2 .grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '#number_2 .grid-sizer'
            }
        });
    });

})