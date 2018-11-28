/**
 * Created by yang on 2018/10/15.
 */
$(function () {
    $('.nav_ul li').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })

    $('.slider_btn').click(function () {
        showslider()
    })
    $('.mask').click(function () {
        hideslider()
    })

    function showslider() {
        $('.mask').fadeIn()
        $('.slider').css('right',0)
    }
    function hideslider() {
        $('.mask').fadeOut()
        $('.slider').css('right',-300)
    }

    $(window).scroll(function () {
        if ($(window).scrollTop()>100){
            $('.top').css('display','block')
        }else {
            $('.top').css('display','none')
        }
    })

    $('.top').click(function () {
        $('body,html').animate({
            scrollTop:0
        })

    })

})





