!function(e,i,a,t){"use strict";e(function(){function t(){e(".view-who-we-are-pages .views-row, .view-what-we-do-pages .views-row, .view-why-it-matters-pages .views-row, .view-staff .views-row").each(function(){e(this).offset().top>e(i).scrollTop()+e(i).height()-300||e(this).animate({opacity:"1"},400)}),e(".view-timeline .view-content .event-content").each(function(){e(this).offset().top>e(i).scrollTop()+e(i).height()-200||e(this).animate({opacity:"1"},400)})}e(".hamburger").click(function(){e("header .menu--main.navigation").slideToggle(500),e(this).toggleClass("active"),e("header").toggleClass("active")}),e(".menu--main.navigation .menu-item > a").hover(function(){e(i).width()>1220&&(e(this).addClass("underline-link"),e(this).next(".menu").slideDown("400"),e(this).parent().parent().find(".menu").not(e(this).next(".menu")).slideUp("400"),e(this).parent().parent().find(".underline-link").not(e(this)).removeClass("underline-link"))}),e(".menu--main.navigation .menu-item .menu").mouseleave(function(){e(i).width()>1220&&(e(this).parent().find("> a").removeClass("underline-link"),e(this).slideUp(400))}),e(".menu--main.navigation .menu-item:nth-child(5) > a").not(".menu--main.navigation li.menu-item ul li.menu-item:nth-child(5) a").click(function(e){e.preventDefault()}),e(".menu--main.navigation li.menu-item:last-of-type a").not(".menu--main.navigation li.menu-item ul li.menu-item a").addClass("donate"),e(i).scroll(function(){e(i).scrollTop()>100&&e("header").addClass("scrolled"),e(i).scrollTop()<100&&e("header").removeClass("scrolled")}),e(i).scrollTop()>100&&e("header").addClass("scrolled"),e(i).scrollTop()<100&&e("header").removeClass("scrolled"),e(".home-slider").bxSlider({mode:"vertical",controls:!1,pager:e(".home-slider .slide").length>1,adaptiveHeight:!0,auto:!1,touchEnabled:!1}),e(".image-slider").bxSlider({mode:"fade",controls:!1,pager:!0,adaptiveHeight:!0,touchEnabled:!1,auto:!0,pause:3e3}),e(".content-slider").bxSlider({mode:"fade",controls:!1,pagerCustom:"#bx-pager",adaptiveHeight:!0,auto:!1,touchEnabled:!1}),e(".map-graphics .view-content").bxSlider({mode:"fade",controls:!1,pagerCustom:".map-sidebar .view-content",adaptiveHeight:!0,auto:!1,touchEnabled:!1});var s=0;e(".map-sidebar .views-row").each(function(){e(this).wrap(function(){return'<a data-slide-index="'+s++ +'" href="#map"></div>'})}),e(i).scroll(e.throttle(350,t)),e(i).on("load resize",function(){t()}),e(a).scroll(function(){var i=e(this).scrollTop();i>50?e(".back-top").fadeOut():e(".back-top").fadeIn()}),e(".back-top").click(function(){var a=e(i).height()-95;e("html, body").animate({scrollTop:a},1e3)}),e(".field--name-field-1st-related-page .field__label").html("You may also like"),e(".view-who-we-are-pages .views-row, .view-what-we-do-pages .views-row, .view-why-it-matters-pages .views-row").prepend('<div class="views-side cover-bg"></div>'),e(".map-sidebar .views-row .views-field-title").append('<i class="fa fa-arrow-right" aria-hidden="true"></i>'),e(".view-what-we-do-pages .views-row article .node__links .links li a, .view-who-we-are-pages .views-row article .node__links .links li a, .view-why-it-matters-pages .views-row article .node__links .links li a, .body-read-more a").append('<i class="fa fa-plus" aria-hidden="true"></i>');var n=e(".view-timeline .view-content .views-row:last-of-type").height()-56;e(".line-hide").css({height:n});var o=e(".event-content").attr("data-ccount"),l=o,r="...",d="Read More";e(".more").each(function(){var i=e(this).html();if(i.length>l){var a=i.substr(0,l),t=i.substr(l,i.length-l),s=a+'<span class="moreelipses">'+r+'</span><span class="morecontent"><span>'+t+'</span><div><div class="read-more"><a href="" class="morelink">'+d+'<i class="fa fa-plus" aria-hidden="true"></i></a></div></div>';e(this).html(s)}}),e(".morelink").click(function(){return e(this).hasClass("less")?(e(this).removeClass("less"),e(this).text("Read More"),e(this).parents().eq(3).removeClass("more-text"),e(this).remove(".fa-minus"),e(this).append('<i class="fa fa-plus" aria-hidden="true"></i>')):(e(this).addClass("less"),e(this).text("Read Less"),e(this).parents().eq(3).addClass("more-text"),e(this).remove(".fa-plus"),e(this).append('<i class="fa fa-minus" aria-hidden="true"></i>')),e(this).parent().parent().prev().toggle(),e(this).prev().toggle(),!1}),e("#user-login-form").append('<a class="forgtten-pwd" href="/user/password">Forget your password?</a>'),e('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(i){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=e(this.hash);a=a.length?a:e("[name="+this.hash.slice(1)+"]"),a.length&&(i.preventDefault(),e("html, body").animate({scrollTop:a.offset().top-98},1e3,function(){var i=e(a);return i.focus(),!i.is(":focus")&&(i.attr("tabindex","-1"),void i.focus())}))}})})}(jQuery,window,document);