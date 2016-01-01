(function() {
  $('.header-button').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.content').offset().top - 40
    }, 750);
  });

  $('.stickymenu div:nth-child(3)').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#social').offset().top
    }, 750);
  });

  $('.menu div:nth-child(3)').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#social').offset().top
    }, 750);
  });

  $('.footer-menu div:nth-child(3)').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#social').offset().top
    }, 750);
  });

$(window).scroll(function() {
    // 300 = posisi dimana header muncul (remove class hidden)
    if($(window).scrollTop() > $('.content').offset().top - 41) {
        // JADIKAN HEADER POSISI FIXED
        $('.stickynavbar').slideDown('fast');
    } else {
        $('.stickynavbar').slideUp('fast');
    }
});



})();
