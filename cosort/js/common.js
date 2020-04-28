
$(function(){
	$('a[href*=\\#]:not([href=\\#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				if($(this).parents('.menuBox').length){
					setTimeout(function(){
						var targetOffset = $target.offset().top - $('#gHeader').outerHeight();
						$('html,body').animate({scrollTop: targetOffset}, 1000);
					},100);
				}else{
					var targetOffset = $target.offset().top - $('#gHeader').outerHeight();
					$('html,body').animate({scrollTop: targetOffset}, 1000);
				}
				return false;
			}
		}
	});
});

$(window).on('load',function(){
	var localLink = window.location+'';
	if(localLink.indexOf("#") != -1 && localLink.slice(-1) != '#'){
		localLink = localLink.slice(localLink.indexOf("#")+1);
		$('html,body').animate({scrollTop: $('#'+localLink).offset().top - $('#gHeader').outerHeight()}, 500);

	}

	resize()
});

$(function() {
	//tab
	$('.tabPanel .tabBox').hide();
	$('.tabPanel .tabBox').eq(0).show();

	$('.tabPanel .tabUl li a').click(function(){
		var ind=$(this).parent('li').index();
		$(this).parent('li').addClass('on').siblings().removeClass('on');
		$('.tabBox').hide();
		$('.tabBox').eq(ind).show();
		return false;
	});
	//sp tab
	$(".tabBox .spTtl").click(function(){
		$(this).toggleClass("on");
		$(this).next(".inner").slideToggle();
		return false;
	});
})

$(function() {
	$(window).scroll(function(){

		if($('.mainVisual.top').length) {
			var h = $('.mainVisual').outerHeight() - $('#gHeader').outerHeight();
			if($(window).scrollTop() > h) {
				$('#gHeader').addClass('white');
			} else {
				$('#gHeader').removeClass('white');
			}
		}
		var hd = $('.mainVisual').height();
		if($(window).scrollTop() > hd+165) {

			$('.toolLink').addClass('on');
		} else {
			$('.toolLink').removeClass('on');
		}
	}).trigger("scroll");
	var state = false;
	var scrollpos;
	$('#gHeader .menu').on('click', function(){
		if(state == false) {
			scrollpos = $(window).scrollTop();
			$('body').addClass('fixed').css({'top': -scrollpos});
			$('.menuBox').slideDown();
			$('.menu').addClass('on');
			$('#gHeader').addClass('open');

			state = true;
		} else {
			$('body').removeClass('fixed').css({'top': 0});
			window.scrollTo( 0 , scrollpos );
			$('.menuBox').slideUp();
			$('.menu').removeClass('on');
			$('#gHeader').removeClass('open');
			state = false;
		}
		return false;
	});
})



/*//////////////////////////////////////////////////////初期化*/
$(function () {
    resize()
    $(window).resize(function(event) {
       resize()
    });
    $("#cover").fadeOut(800);
})

/*//////////////////////////////////////////////////////リサイズ*/
var winW, winH

function resize() {
    winW = $(window).width()
    winH = $(window).height()

}
var sel = 0
