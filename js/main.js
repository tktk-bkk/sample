$(function(){
    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('active');
        $('.menu-btn').toggleClass('active');
    });

    $('.nav').on('click', function() {
        $(".menu").toggleClass('active');
        $('.menu-btn').toggleClass('active');
    });

}());
