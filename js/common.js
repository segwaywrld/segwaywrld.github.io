$(function(){var touch=$('#touch-menu');var menu=$('.nav');$(touch).on('click',function(e){e.preventDefault();menu.slideToggle();});$(window).resize(function(){var wid=$(window).width();if(wid>760&&menu.is(':hidden')){menu.removeAttr('style');}});$('.header-parallax-window').parallax({imageSrc:'img/header_parallax.jpg',speed:0.5});$('.train').parallax({imageSrc:'img/train_parallax.jpg',speed:0.8});$(".carousel-brands").owlCarousel({loop:true,margin:30,nav:true,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],responsive:{0:{items:1,},520:{items:1,},560:{items:2,},768:{items:2,},992:{items:3,},1200:{items:4,}}});$('.carousel-comments').owlCarousel({loop:true,dots:true,items:1});$('.catalog-gallery').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile mfp-with-zoom',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}}});$('.footer-catalog').magnificPopup({delegate:'a',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile mfp-with-zoom',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}}});$("a[href='#callback']").magnificPopup({mainClass:'mfp-with-zoom',zoom:{enabled:true,duration:300,opener:function(element){return element.find('img');}}});$(".nav").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;$('body,html').animate({scrollTop:top},1500);});$(".footer-menu-item").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;$('body,html').animate({scrollTop:top},1500);});$("#icon-down").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;$('body,html').animate({scrollTop:top},1500);});$("body").append('<div class="top"><i class="fa fa-angle-double-up">');$("body").on("click",".top",function(){$("html, body").animate({scrollTop:0},"slow");});$(window).scroll(function(){if($(this).scrollTop()>$(this).height()){$(".top").addClass("active");}else{$(".top").removeClass("active");}});});