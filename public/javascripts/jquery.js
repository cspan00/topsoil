


  $(document).on('click', '.learnMore', function() {
    var vheight = $(window).height();
      $('html, body').animate({
          scrollTop: (Math.floor($(window).scrollTop() / vheight)+2) * vheight
        }, 1000);
  })
