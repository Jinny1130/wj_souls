

$('.toggleBtn').on('click',function(){
    $('.nav').stop().slideToggle();
});

$('a.menu').bind('click', function(event) {

    var $anchor = $(this);
    $anchor.parent().addClass('on').siblings().removeClass('on');

    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 150)
    }, 1250, 'easeInOutCirc');
    event.preventDefault();
});

$('.famSiteBox>a').on('click',function(){
    $('.famSiteList').stop().slideToggle();
});