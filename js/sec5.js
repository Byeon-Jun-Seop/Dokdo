$(function () {

    $('.list li a').click(function(e){
         e.preventDefault()
        $('.list li a').removeClass('on')
        $(this).addClass('on')
        //a 값을 가져오다 (get하겠다)
        //img는 클릭한  a의  이미지값
            var img=$(this).attr('href')   //this는 클릭한값
            console.log(img) //값을 학인할때(검산)
         //갑을 지정하겠다. (set하겠다)

        $('.scene img'). attr({'src':img})
    })
   var len = $('.bannerwrap li').length;
    // var wid = $('.bannerwrap li').width()
    var wid = 210

  

    var totwid = len * wid
    $('.bannerwrap').css({
        'width': totwid
    })
    var timer = 0
    var mleft = -210
    timer = setInterval(move, 20)

    function move() {
        mleft -= 2
        $('.bannerwrap').css({
            'left': mleft
        })

        if (mleft == -212) {
            $('.bannerwrap li').eq(0).appendTo('.bannerwrap')

        } else if (mleft < -420) {
            mleft = -210
        }
    }
    $('.bannerwrap').mouseenter(function () {
        clearInterval(timer)
    })

    $('.bannerwrap').mouseleave(function () {
        timer = setInterval(move, 20)
    })

    $(".scroll").mCustomScrollbar({
        theme: "dark"
    })




    var w = $('.slide').width()

    $('a.next').click(function (e) {
        e.preventDefault()
        $('.slidewrap').stop().animate({
                'margin-left': -w * 2
            },

            500,
            function () {
                $('.slide').first().appendTo('.slidewrap');
                $('.slidewrap').css({
                    'margin-left': -w
                })
            })
    })

    $('a.prev').click(function (e) {
        e.preventDefault()
        $('.slidewrap').stop().animate({
                'margin-left': 0
            },
            500,
            function () {
                $('.slide').last().prependTo('.slidewrap');
                $('.slidewrap').css({
                    'margin-left': -w
                })
            })
    })



})