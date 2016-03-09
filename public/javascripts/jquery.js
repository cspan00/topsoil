  $(document).on('click', '.learnMore', function() {
    var vheight = $(window).height();
      $('html, body').animate({
          scrollTop: (Math.floor($(window).scrollTop() / vheight)+2) * vheight
        }, {duration: 1000, queue: false});

      $('.splashPageSummary').hide().fadeIn({duration: 3000, queue: false});

  });


  $(document).on('click', '.backToTop', function() {
    var vheight = $(window).height();
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });
