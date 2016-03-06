$(document).ready(function(){

  $(this).scrollTop(0);

  $(document).on('click', '.learnMore', function() {
    var vheight = $(window).height();
      $('html, body').animate({
          scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
        }, 1000);
  })

})
