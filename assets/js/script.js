$( document ).ready(function () {
  $( ".portfolio-item" ).hover(
    function (e) {
      const img = $( e.target ).attr("src");
      $( '.portfolio' ).css("background-image", "url("+img+")");
    }
  );
});
