$('.OpenMenuButton, .overlay').click(function(){
    $('.OpenMenuButton').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });









// TweenMax.from(".leftEyeLid", 0.1, { y:10, repeat:-1, repeatDelay:3, ease:Power4.easeIn });

TweenMax.from("#redCircleCut-1", 6, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#gray_background", 6, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#blueCut-5", 9, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#text897", 3, { opacity:0, ease:Power4.easeIn  });
