
  
$(function(){

  // トップページスライドショー
  $(".slide-show").slick({
      autoplay:true,
      dots:false,
      autoplaySpeed:2500,
      fade: true,
      infinite: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
  });

  // トップページフェードイン
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 290){
              $(this).addClass('scrollin');
            }
        });
    });




 



});

