(function($, window, document, undefined) {

  'use strict';

  $(function() {
    // DOM ready, take it away
    /*NAVIGATION*/
    $('.hamburger').click(function() {
      $('header .menu--main.navigation').slideToggle(500);
      $(this).toggleClass('active');
      $('header').toggleClass('active');
    });
    $('.menu--main.navigation .menu-item > a').hover(function() {
      if ($(window).width() > 1220) {
        $(this).addClass('underline-link');
        $(this).next('.menu').slideDown('400');
        $(this).parent().parent().find('.menu').not($(this).next('.menu')).slideUp('400');
        $(this).parent().parent().find('.underline-link').not($(this)).removeClass('underline-link');
      }
    });
    $('.menu--main.navigation .menu-item .menu').mouseleave(function() {
      if ($(window).width() > 1220) {
        $(this).parent().find('> a').removeClass('underline-link');
        $(this).slideUp(400);
      }
    });
    $('.menu--main.navigation .menu-item:nth-child(5) > a').not('.menu--main.navigation li.menu-item ul li.menu-item:nth-child(5) a').click(function(event) {
      event.preventDefault();
    });
    $('.menu--main.navigation li.menu-item:last-of-type a').not('.menu--main.navigation li.menu-item ul li.menu-item a').addClass('donate');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $('header').addClass('scrolled');
      }
      if ($(window).scrollTop() < 100) {
        $('header').removeClass('scrolled');
      }
    });
    if ($(window).scrollTop() > 100) {
      $('header').addClass('scrolled');
    }
    if ($(window).scrollTop() < 100) {
      $('header').removeClass('scrolled');
    }

    /*SLIDERS*/



    var slidesCount = $('.home-slider .slide').length;
    console.log('slidesCount');
    console.log(slidesCount);

    $('.home-slider').bxSlider({
      mode: 'vertical',
      controls: false,
      pager: (slidesCount > 1),
      adaptiveHeight: true,
      auto: false,
      touchEnabled: false,
    });
    $('.image-slider').bxSlider({
      mode: 'fade',
      controls: false,
      pager: true,
      adaptiveHeight: true,
      touchEnabled: false,
      auto: true,
      pause: 3000
    });
    $('.content-slider').bxSlider({
      mode: 'fade',
      controls: false,
      pagerCustom: '#bx-pager',
      adaptiveHeight: true,
      auto: false,
      touchEnabled: false,
    });
    $('.map-graphics .view-content').bxSlider({
      mode: 'fade',
      controls: false,
      pagerCustom: '.map-sidebar .view-content',
      adaptiveHeight: true,
      auto: false,
      touchEnabled: false,
    });
    /*create pager links*/
    var i = 0;
    $('.map-sidebar .views-row').each(function() {
      $(this).wrap(function() {
        return '<a data-slide-index="' + (i++) + '" href="#map"></div>';
      });
    });

    /*SCROLL ACTIONS*/

    function checkTop() {
      $('.view-who-we-are-pages .views-row, .view-what-we-do-pages .views-row, .view-why-it-matters-pages .views-row, .view-staff .views-row').each(function() {
        if (($(this).offset().top > ($(window).scrollTop() + $(window).height() - 300))) {} else {
          $(this).animate({
            opacity: '1',
          }, 400);
        }
      });
      $('.view-timeline .view-content .event-content').each(function() {
        if (($(this).offset().top > ($(window).scrollTop() + $(window).height() - 200))) {

        } else {
          $(this).animate({
            opacity: '1',
          }, 400);
        }
      });
    }
    $(window).scroll($.throttle(350, checkTop));
    $(window).on('load resize', function() {
      checkTop();
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 50) {
        $('.back-top').fadeOut();
      } else {
        $('.back-top').fadeIn();
      }
    });
    $('.back-top').click(function() {
      var viewportHeight = ($(window).height() - 95);
      $('html, body').animate({
        scrollTop: viewportHeight
      }, 1000);
    });

    /*CHEATS*/

    $('.field--name-field-1st-related-page .field__label').html('You may also like');
    $('.view-who-we-are-pages .views-row, .view-what-we-do-pages .views-row, .view-why-it-matters-pages .views-row').prepend('<div class="views-side cover-bg"></div>');
    $('.map-sidebar .views-row .views-field-title').append('<i class="fa fa-arrow-right" aria-hidden="true"></i>');
    $('.view-what-we-do-pages .views-row article .node__links .links li a, .view-who-we-are-pages .views-row article .node__links .links li a, .view-why-it-matters-pages .views-row article .node__links .links li a, .body-read-more a').append('<i class="fa fa-plus" aria-hidden="true"></i>');

    var lastrowheight = $('.view-timeline .view-content .views-row:last-of-type').height() - 56;
    $('.line-hide').css({
      height: lastrowheight
    });
    /*HIDE/SHOW*/
    var charactercount = $('.event-content').attr('data-ccount');
    // can change these
    var showChar = charactercount;
    var ellipsestext = '...';
    var moretext = 'Read More';
    $('.more').each(function() {
      var content = $(this).html();
      if (content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        var html = c + '<span class="moreelipses">' + ellipsestext + '</span><span class="morecontent"><span>' + h + '</span><div><div class="read-more"><a href="" class="morelink">' + moretext + '<i class="fa fa-plus" aria-hidden="true"></i></a></div></div>';
        $(this).html(html);
      }
    });
    $('.morelink').click(function() {
      if ($(this).hasClass('less')) {
        $(this).removeClass('less');
        $(this).text('Read More');
        $(this).parents().eq(3).removeClass('more-text');
        $(this).remove('.fa-minus');
        $(this).append('<i class="fa fa-plus" aria-hidden="true"></i>');

      } else {
        $(this).addClass('less');
        $(this).text('Read Less');
        $(this).parents().eq(3).addClass('more-text');
        $(this).remove('.fa-plus');
        $(this).append('<i class="fa fa-minus" aria-hidden="true"></i>');

      }
      $(this).parent().parent().prev().toggle();
      $(this).prev().toggle();
      return false;
    });

    /*FORGOT PWD LINK*/

    $('#user-login-form').append('<a class="forgtten-pwd" href="/user/password">Forget your password?</a>');

    /*ANCHOR SCROLL*/
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
          location.hostname === this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 98
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            });
          }
        }
      });


  });

})(jQuery, window, document);
