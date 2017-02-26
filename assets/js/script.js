$( document ).ready(function () {
  // $( "body" ).css("padding-top", $( ".header" ).height());
  // let img;
  //
  // $( ".portfolio-item" ).hover(
  //   function (e) {
  //     const img = $( e.target ).attr("src");
  //     $( '#portfolio' ).css("background-image", "url("+img+")");
  //   }
  // );

  (function () {
    const imgs = $('.portfolio-item');
    const img = $(imgs[Math.floor(Math.random()*imgs.length)]).attr('src');
    $( '#portfolio' ).css("background-image", "url("+img+")");
  })()

  $( ".portfolio-item" ).click(
    function (e) {
      img = $( e.target ).attr("src");
      $( ".lightbox img" ).attr("src", img);
      $( ".lightbox, .hide-lightbox" ).css("visibility", "visible");
    }
  );

  $( ".hide-lightbox, .close" ).click(
    function (e) {
      $( ".lightbox, .hide-lightbox" ).css("visibility", "hidden");
    }
  );

  $(window).scroll(function(){
    var header_heigth = $('.header').height();
    var window_top = $(window).scrollTop() + header_heigth + 200;
    var sessoes = $( ".sessao" );
    for (var i = 0; i < sessoes.length; i++) {
      var este = $( '#' + sessoes[i].id ).offset();
      if (sessoes[i+1]) {
        este.bottom = $( '#' + sessoes[i+1].id ).offset().top;
      }else{
        este.bottom = $(document).height();
      }
      if (este.top <= window_top && este.bottom >= window_top) {
        $('.nav li.active').removeClass('active');
        $('.nav li a[href*="#'+ sessoes[i].id +'"]').parent().addClass('active');
      }
    }

  });

  $('.nav a').click(function (e) {
    e.preventDefault();
    var target = $("#" + e.target.href.split("#")[1]);
    $('html, body').animate({
      scrollTop: target.offset().top,
    }, 1000);
  });

});
