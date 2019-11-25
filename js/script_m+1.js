
$(function(){
    
  var screen = $(window).width()

  console.log(screen)
  
  $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: 100
        }
      });

  
})
