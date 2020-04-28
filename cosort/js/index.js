

$(function() {


    $("#logo_typo b").lettering()
    $("#logo_typo b span").css("opacity",0)
    setTimeout(function(){
      $("#logo_typo").css("opacity",1)
      $("#logo_typo b").find('span').each(function (index, elm) {
                  TweenLite.to(elm, 0.2, { y: -10, ease:Power3.easeOut});
                  TweenLite.to(elm, 0.8 + (0.1 * index), {delay: 0.2 + (0.04 * index), opacity: 1, y: 0, ease:Power3.easeOut});
      })
    },3600)

    if($.cookie('btnFlg') != 'on'){

      TweenMax.to($(".load_line"),1.8,{scaleX:1,ease:Power3.easeInOut,delay:0.5})
      TweenMax.to($(".top_bg1"),0.8,{opacity:0,delay:2,onComplete:function(){
        $(".top_bg1,.load_line").css("display","none")
      }})

      TweenMax.to($(".top_bg2"),0.8,{opacity:0,delay:3.5,onComplete:function(){
        $(".top_bg2").css("display","none")
      }})
    $.cookie('btnFlg', 'on', { expires: 30,path: '/' });
    }else{
      $(".top_bg1,.load_line").css("display","none")
      $(".top_bg2").css("display","none")
    }

    $(".slide_news").slick({
     dots: false,
     arrows: false
    })

});
